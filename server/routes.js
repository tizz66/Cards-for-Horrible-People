import Game from './Game';
import randomstring from 'randomstring';
import _ from 'lodash';

let games = {};

function gameManager (router, io, socketSession) {

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
				error: "Oops, that gamekey is not valid.",
				field: 'gameKey'
			});
			return;
		}

		if( game.playerExists( req.body.nickname ) ){
			res.status(500).json({
				error: "That nickname already exists in the game!",
				field: 'nickname'
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
				
		const gameKey = randomstring.generate({ 
			length: 6, 
			readable: true 
		}).toUpperCase();
		
		// Use session in namespace
		io.of( `/${gameKey}` ).use( socketSession );
		
		const game = new Game({ 
			key: gameKey, 
			timeLimits: req.body.timeLimits, 
			winCount: req.body.winCount 
		}, io.of( `/${gameKey}` ) );

		// If we're running with the debug flag then we'll reset the
		// games object so we only have one in play
		if( process.env.DEBUGSERVER ){
			games = {};
		}

		games[ gameKey ] = game;

		const playerID = game.addPlayer( req.body.nickname, true );

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
