import * as types from '../constants/ActionTypes';

export function playCard(data) {
    return {
        type: types.PLAY_CARD,
    	cardID: data.cardID,
    	cardText: data.cardText
    };
}