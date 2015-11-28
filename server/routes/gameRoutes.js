import 'body-parser';

export default function routes (router) {
	router.post('/', function (req, res) {
		setTimeout( function () {
			res.json({
				type: 'JOIN_GAME'
			})	
		}, 2000 );		
	});
} 