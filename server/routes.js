export default function gameRoutes (router, gameManager) {
	router.post('/join', function (req, res) {

		let game = gameManager.getGame( req.body.gameKey );

		if( !game ){
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

		let gameData = gameManager.joinGame( req.body.nickname );

		req.session.gameKey = gameData.gameKey;
		req.session.playerID = gameData.playerID;

		res.json({
			gameKey: gameData.gameKey,
			playerID: gameData.playerID
		});
	});

	router.post('/new', function (req, res) {
		let gameData = gameManager.newGame('test user');

		req.session.gameKey = gameData.gameKey;
		req.session.playerID = gameData.playerID;

		res.json({
			gameKey: gameData.gameKey,
			playerID: gameData.playerID
		});
	});
} 