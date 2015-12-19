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
				started: false,
				gameKey: action.result.gameKey,
				owner: action.result.ownerID,
				playerID: action.result.playerID,
				isOwner: false
			} ); 

		case types.JOIN_GAME_FAIL:
			return Object.assign( {}, state, { 
				loading: false,
				loaded: false,
				started: false
			} ); 

		case types.NEW_GAME_SUCCESS:
			return Object.assign( {}, state, {
				loading: false,
				loaded: true,
				started: false,
				gameKey: action.result.gameKey,
				owner: action.result.playerID,
				playerID: action.result.playerID,
				isOwner: true
			} );

		case types.START_GAME:
			return Object.assign( {}, state, {
				loading: false,
				loaded: true,
				started: true
			} );

		default:
			return state;
	}
}