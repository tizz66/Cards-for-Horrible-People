import _ from 'lodash';
import Deck from './Deck';

export default class Game {
	constructor (options, namespace) {
		this.gameKey = options.key;
		this.players = {};
		this.socket = namespace;
		this.ownerID = '';
		this.round = {};
		//this.judgeID = '';
		//this.cardsInRound = [];
		this.deck = new Deck();

		this.socketEvents();
	}

	socketEvents () {
		this.socket.on( 'connection', (socket) => {

			this.players[ socket.handshake.session.playerID ]['socket'] = socket;

			socket.on('start-game', () => {
				if( socket.handshake.session.playerID == this.ownerID ){
					this.socket.emit( 'game-started', {
						players: this.getPlayers()
					} );

					this.launchGame();
					this.newRound();
				}				
			});

			socket.on('play-card', (data) => {
				let cardData = this.deck.getCardData( data.cardID );
				let played = {
					player: socket.handshake.session.playerID,
					card: cardData
				};

				this.round.played.push( played );
				this.players[ this.round.judgeID ].socket.emit( 'card-played', {
					cardID: data.cardID,
					cardText: cardData.text,
					lastCard: ( this.round.played.length == ( _.size( this.players ) - 1 ) )
				});
			});

			socket.on('choose-winner', (data) => {
				let cardData = this.deck.getCardData( data.cardID );

				if( socket.handshake.session.playerID !== this.round.judgeID ){
					return;
				}

				// Who has the winning card?
				let winner;
				for( let i = 0; i < this.round.played.length; i++ ){
					if( this.round.played[ i ].card.id === data.cardID ){
						winner = this.round.played[ i ].player;
						break;
					}
				}

				// Add to the winner's score
				this.players[ winner ]['score'] += 1;
				this.players[ winner ]['cardsWon'].push( data.cardID );

				// Tell everyone
				this.socket.emit( 'winner-chosen', {
					winner: winner,
					card: cardData,
					scores: this.getScores()
				});
			});
		});
	}

	newRound () {
		this.round = {
			judgeID: this.ownerID,
			played: [],
			question: this.deck.drawQuestion()
		};

		this.socket.emit( 'new-round', {
			judgeID: this.round.judgeID,
			question: this.round.question
		});
	}

	launchGame () {
		_.forOwn( this.players, (player, playerID) => {
			player.cards = this.deck.drawAnswers(8);
			player.socket.emit( 'starting-hand', player.cards );
		});
	}

	getPlayers () {
		let players = {};

		_.forOwn( this.players, (player, playerID) => {
			players[ playerID ] = _.pick( player, 'nickname', 'score' );
		} );

		return players;
	}

	getScores () {
		let scores = {};

		_.forOwn( this.players, (player, playerID) => {
			scores[ playerID ] = _.pick( player, 'score' );
		} );

		return scores;
	}

	addPlayer (nickname, owner) {
		let playerID = new Buffer( nickname ).toString('base64');

		this.players[ playerID ] = {
			nickname: nickname,
			cards: [],
			score: 0,
			cardsWon: []
		};

		if( owner ){
			this.ownerID = playerID;
		}

		console.log("Added player " + playerID + " to " + this.gameKey);

		return playerID;
	}

	playerExists (nickname) {
		let playerID = new Buffer( nickname ).toString('base64');
		return !_.isUndefined( this.players[ playerID ] );
	}
}
