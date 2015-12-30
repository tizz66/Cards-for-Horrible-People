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

				this.round.cards.push( data.cardID );
				this.players[ this.round.judgeID ].socket.emit( 'card-played', {
					cardID: data.cardID,
					cardText: cardData.text,
					lastCard: ( this.round.cards.length == ( _.size( this.players ) - 1 ) )
				});
			});
		});
	}

	newRound () {
		this.round = {
			judgeID: this.ownerID,
			cards: [],
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

	addPlayer (nickname, owner) {
		let playerID = new Buffer( nickname ).toString('base64');

		this.players[ playerID ] = {
			nickname: nickname,
			cards: [],
			score: 0
		}

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
