import * as types from '../constants/ActionTypes';

const initialState = {};

export default function errors( state = initialState, action ) {

	switch( action.type ){
		case types.JOIN_GAME_FAIL:
			return Object.assign( {}, { 
				joinError: action.error.error
			} );

		default:
			return state;
	}
}