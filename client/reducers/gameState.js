import * as types from '../constants/ActionTypes';

const initialState = {
	loading: false,
	loaded: false,
	started: false
};

export default function gameState( state = initialState, action ) {

	switch( action.type ){

		case types.JOIN_GAME_LOADING:
			return Object.assign( {}, state, { 
				loading: true,
				loaded: false,
				started: false
			} ); 

		case types.JOIN_GAME_SUCCESS:
			return Object.assign( {}, state, { 
				loading: false,
				loaded: true,
				started: false
			} ); 

		default:
			return state;
	}
}