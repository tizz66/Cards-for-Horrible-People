let data = {

	gameState: {
		loading: false,
		loaded: true,
		started: false,
		owner: 1,
		players: 0
	},
	playState: {
		dealer: 1,
		receivedCards: [],
		selectedWinner: 0
	},
	players: {
		1: {
			name: 'Rikki',
			score: 0
		},
		2: {
			name: 'Dave',
			score: 0
		}
	},
	hand: [
		{
			id: 145,
			text: "black text"
		},
		{
			id: 146,
			text: "black text"
		},
		{
			id: 147,
			text: "black text"
		}
	]
}