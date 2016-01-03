import * as types from '../constants/ActionTypes';
import _ from 'lodash';

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

		case types.REPLACE_CARD:
			return state.map( (item) => {
				return ( item.played ) ? Object.assign( action.card, { new: true } ) : Object.assign( {}, item );
			});

		case types.NEW_ROUND:
			return state.map( (item) => {
				return _.omit( item, 'new' );
			});

		default:
			return state;
	}
}
