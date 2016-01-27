import Game from './Game';
import randomstring from 'randomstring';
import _ from 'lodash';

let games = {};

function gameManager (router, io) {

	function gameExists (gameKey) {
		return !_.isUndefined( games[ gameKey ] );
	}

	//-------------------------------------------
	// Join a game (ajax endpoint)
	//-------------------------------------------
	router.post('/join', function (req, res) {

		let game = games[ req.body.gameKey ];

		// If we're running with the debug flag then we'll brute-force the
		// game key and username to save our sanity a little
		if( process.env.DEBUGSERVER ){
			game = games[ _.first( Object.keys( games ) ) ];
			req.body.nickname = "TESTUSER";
		}

		if( _.isUndefined( game ) ){
			res.status(500).json({
				error: "GAME_NOT_FOUND"
			});
			return;
		}

		if( game.playerExists( req.body.nickname ) ){
			res.status(500).json({
				error: "NAME_EXISTS"
			});
			return;
		}

		const playerID = game.addPlayer( req.body.nickname );

		req.session.gameKey = req.body.gameKey;
		req.session.playerID = playerID;

		res.json({
			gameKey: req.body.gameKey,
			playerID: playerID,
			ownerID: game.ownerID
		});
	});

	//-------------------------------------------
	// Create a new game (ajax endpoint)
	//-------------------------------------------
	router.post('/new', function (req, res) {
		let gameKey = randomstring.generate({ length: 6, readable: true }).toUpperCase();
		let game = new Game({ key: gameKey }, io);

		// If we're running with the debug flag then we'll reset the
		// games object so we only have one in play
		if( process.env.DEBUGSERVER ){
			games = {};
		}

		games[ gameKey ] = game;

		let playerID = game.addPlayer( req.body.nickname, true );

		req.session.gameKey = gameKey;
		req.session.playerID = playerID;

		res.json({
			gameKey: gameKey,
			playerID: playerID,
			players: game.getPlayers()
		});
	});
}

export default gameManager;
