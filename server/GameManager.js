import randomstring from 'randomstring';
import _ from 'lodash';
import Game from './Game';

let games = {};

export default function gameManager (io) {
	
	return {
		joinGame: function (gameKey, nickname) {
			if( !gameExists( gameKey ) ){
				return false;
			};

			let playerID = games[ gameKey ].addPlayer( nickname );

			return { gameKey, playerID };
		},

		newGame: function (nickname) {
			let gameKey = randomstring.generate({ length: 6, readable: true }).toUpperCase();

			games[ gameKey ] = new Game({
				key: gameKey
			}, io);

			let playerID = games[ gameKey ].addPlayer( nickname );

			return { gameKey, playerID };
		},

		getGame: function (gameKey) {
			if( !gameKey || !this.gameExists( gameKey ) ){
				return false;
			}

			return games[ gameKey ];
		},

		gameExists: function (gameKey) {
			return !_.isUndefined( games[ gameKey ] );
		}
	}

};