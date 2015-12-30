import * as types from '../constants/ActionTypes';

const initialState = [];

export default function gameState( state = initialState, action ) {

	switch( action.type ){
		case types.STARTING_HAND:
			return [ ...action.hand ];

		case types.PLAY_CARD:
			return state.map( (item) => {
				if( item.id == action.cardID ){
					item.played = true;
				}
				return Object.assign( {}, item );
			});

		default:
			return state;
	}
}