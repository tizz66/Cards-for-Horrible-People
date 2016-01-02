import * as types from '../constants/ActionTypes';

export function newRound(data) {
	return {
		type: types.NEW_ROUND,
		judgeID: data.judgeID,
		question: data.question
	}
}

export function flipQuestion() {
	return dispatch => {
		setTimeout( () => {
			dispatch( startRound() );
		}, 2000 );

		dispatch({
			type: types.FLIP_QUESTION
		});
	};
}

export function startRound() {
	return {
		type: types.START_ROUND
	}
}

export function playCard(data) {
    return {
        type: types.PLAY_CARD,
    	cardID: data.cardID,
    	cardText: data.cardText
    };
}

export function cardPlayed(data) {
	return {
		type: types.CARD_PLAYED,
		cardID: data.cardID,
		cardText: data.cardText
	};
}

export function allCardsPlayed() {
	return {
		type: types.ALL_CARDS_PLAYED
	};
}

export function choosingAnswer() {
	return {
		type: types.READY_TO_CHOOSE
	};
}

export function chooseWinner(data) {
	return {
		type: types.CHOOSE_WINNER,
		cardID: data.cardID,
		cardText: data.cardText
	};
}