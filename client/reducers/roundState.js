import * as types from '../constants/ActionTypes';

const initialState = {};

export default function roundState( state = initialState, action ) {

	console.log( action.type );

	switch( action.type ){
		case types.START_GAME:
			return Object.assign( {}, state, {
				judgeID: action.judgeID
			} );

		case types.PLAY_CARD:
			return Object.assign( {}, state, {
				played: {
					cardID: action.cardID,
					cardText: action.cardText
				}
			} );

		default:
			return state;
	}
}