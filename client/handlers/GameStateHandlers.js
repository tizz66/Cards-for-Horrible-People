import superagent from 'superagent';

export function joinGame (game) {
	return new Promise((resolve, reject) => {
		superagent
			.post('/game')
			.send(game)
			.end((err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res.body);
				}
			});
	});
}