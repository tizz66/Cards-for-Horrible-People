import * as types from '../constants/ActionTypes';

export function startingHand(hand) {
    return {
        type: types.STARTING_HAND,
    	hand: hand
    };
}

export function replaceCard(card) {
	return {
		type: types.REPLACE_CARD,
		card: card
	};
}

export function markCardSeen(cardID) {
	return {
		type: types.MARK_CARD_SEEN,
		cardID: cardID
	};
}
