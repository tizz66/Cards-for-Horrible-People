import * as types from '../constants/ActionTypes';

const initialState = [];

export default function gameState( state = initialState, action ) {

	switch( action.type ){
		case types.STARTING_HAND:
			return Object.assign( {}, state, action.hand );
		default:
			return state;
	}
}