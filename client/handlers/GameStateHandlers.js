import superagent from 'superagent';

export function joinGame (game) {
	return new Promise((resolve, reject) => {
		superagent
			.post('/game/join')
			.send(game)
			.end( (err, res) => {
				if (err) {
					reject(res.body || err);
				} else {
					resolve(res.body);
				}
			});
	});
}

export function newGame (data) {
	return new Promise((resolve, reject) => {
		superagent
			.post('/game/new')
			.send(data)
			.end( (err, res) => {
				if (err) {
					reject(res.body || err);
				} else {
					resolve(res.body);
				}
			});
	});
}