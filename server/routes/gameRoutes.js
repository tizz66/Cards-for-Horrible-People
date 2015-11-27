import 'body-parser';

export default function routes (router) {
	router.post('/', function (req, res) {
		res.json({
			type: 'JOIN_GAME'
		})
	});
} 