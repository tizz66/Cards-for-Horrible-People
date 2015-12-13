import _ from 'lodash';

export default class Game {
	constructor (options, namespace) {
		this.gameKey = options.key;
		this.players = {};
		this.socket = namespace;
		this.ownerID = '';

		this.socketEvents();
	}

	socketEvents () {
		this.socket.on( 'connection', function (socket) {
			socket.on('start-game', () => {
				socket.emit('game-started');
			});
		});
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

		return playerID;
	}

	playerExists (nickname) {
		let playerID = new Buffer( nickname ).toString('base64');
		return !_.isUndefined( this.players[ playerID ] );
	}
}
