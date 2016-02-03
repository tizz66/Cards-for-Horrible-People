import _ from 'lodash';
import Deck from './Deck';

const avatarColors = [
	'C62828', 'AD1457', '6A1B9A', '4527A0',
	'283593', '1565C0', '0277BD', '00838F',
	'00695C', '2E7D32', '558B2F', '9E9D24',
	'F9A825', 'FF8F00', 'EF6C00', 'D84315',
	'4E342E'
];

export default class Game {
	constructor (options, namespace) {
		this.gameKey = options.key;
		this.winCount = parseInt( options.winCount, 10 );
		this.timeLimits = Boolean( options.timeLimits );
		this.players = {};
		this.socket = namespace;
		this.ownerID = '';
		this.round = {};
		this.deck = new Deck();

		this.socketEvents();
	}

	socketEvents () {
		this.socket.on( 'connection', (socket) => {

			this.players[ socket.handshake.session.playerID ]['socket'] = socket;

			socket.on('start-game', () => {
				if( socket.handshake.session.playerID == this.ownerID ){
					this.socket.emit( 'game-started', {
						players: this.getPlayers(),
						timeLimits: this.timeLimits,
						winCount: this.winCount
					} );

					this.launchGame();
					this.newRound();
				}
			});

			socket.on('start-round', () => {
				this.socket.emit('round-started');
			});

			socket.on('play-card', (data) => {
				const playerID = socket.handshake.session.playerID;
				const cardData = this.deck.getCardData( data.cardID );
				const played = {
					player: socket.handshake.session.playerID,
					card: cardData
				};

				this.round.played.push( played );
				this.players[ this.round.judgeID ].socket.emit( 'card-played', {
					cardID: data.cardID,
					cardText: cardData.text,
					lastCard: ( this.round.played.length == ( _.size( this.players ) - 1 ) )
				});

				console.log( "Player " + playerID + " played card ID " + data.cardID );

				// Get a new card
				const newCard = this.deck.drawAnswers(1);

				// Update player's hand with the new card
				this.players[ playerID ].cards = this.players[ playerID ].cards.map( (card) => {
					return ( card.id === data.cardID ) ? newCard : card;
				});

				// Send the player the new card
				// drawAnswers returns an array, so we need to shift it to get the card standalone
				socket.emit( 'replacement-card', newCard.shift() );
			});

			socket.on('choose-winner', (data) => {
				const cardData = this.deck.getCardData( data.cardID );

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
					winnerID: winner,
					card: cardData,
					scores: this.getScores()
				});
			});

			socket.on('complete-round', () => {
				this.round.completed.push( socket.handshake.session.playerID );
				console.log( socket.handshake.session.playerID + " is ready for the next round" );

				if( this.round.completed.length == _.size( this.players ) ){
					this.newRound();
				}
			});
		});
	}

	newRound () {
		let judgeID = this.ownerID;

		if( !_.isUndefined( this.round.judgeID ) ){
			const playerIDs = Object.keys( this.players );
			const judgePos = playerIDs.indexOf( this.round.judgeID );

			if( judgePos === ( _.size( this.players ) - 1 ) ){
				judgeID = playerIDs[0];
			} else {
				judgeID = playerIDs[ judgePos + 1 ];
			}
		}

		this.round = {
			judgeID: judgeID,
			played: [],
			question: this.deck.drawQuestion(),
			completed: []
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

	getPlayers (ids) {
		const players = {};
		const params = ['nickname', 'score', 'color', 'avatarText'];

		if( _.isString( ids ) ){
			return _.pick( this.players[ ids ], ...params );
		} else {
			_.forOwn( this.players, (player, playerID) => {
				if( ( _.isArray( ids ) && _.indexOf( ids, playerID ) !== -1 ) || _.isUndefined( ids ) ){
					players[ playerID ] = _.pick( player, ...params );
				}
			} );
		}

		return players;
	}

	getScores () {
		const scores = {};

		_.forOwn( this.players, (player, playerID) => {
			scores[ playerID ] = player.score;
		} );

		return scores;
	}

	addPlayer (nickname, owner) {
		const playerID = new Buffer( nickname ).toString('base64');

		this.players[ playerID ] = {
			nickname: nickname,
			cards: [],
			score: 0,
			cardsWon: [],
			color: _.sample( avatarColors ),
			avatarText: nickname.charAt(0).toUpperCase()
		};

		if( owner ){
			this.ownerID = playerID;
		}

		console.log("Added player " + playerID + " to " + this.gameKey);

		this.socket.emit( 'player-joined', this.getPlayers( playerID ) );

		return playerID;
	}

	playerExists (nickname) {
		const playerID = new Buffer( nickname ).toString('base64');
		return !_.isUndefined( this.players[ playerID ] );
	}
}
