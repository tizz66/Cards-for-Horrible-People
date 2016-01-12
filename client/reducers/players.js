import * as types from '../constants/ActionTypes';

const initialState = {};

export default function players( state = initialState, action ) {

	switch( action.type ){
		case types.PLAYER_JOINED:
			return Object.assign( {}, {
				...state,
				[ action.player.nickname ]: action.player
			});

		case types.START_GAME:
			return Object.assign( {}, action.players );

		case types.DECLARE_WINNER:
			let players = {};

			_.forEach( action.scores, (score, playerID) => {
				players[ playerID ] = {
					...state[ playerID ],
					score
				}
			});

			return players;

		default:
			return state;
	}
}
