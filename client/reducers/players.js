import * as types from '../constants/ActionTypes';

const initialState = {};

export default function players( state = initialState, action ) {

	switch( action.type ){

		case types.PLAYER_JOINED:
			return Object.assign( {}, {
				...state,
				[ action.player.id ]: action.player
			});

		case types.NEW_GAME_SUCCESS:
			return Object.assign( {}, action.result.players );

		case types.START_GAME:
			return Object.assign( {}, action.players );

		case types.DECLARE_WINNER:
			const players = {};

			_.forEach( action.scores, (score, playerID) => {
				players[ playerID ] = {
					...state[ playerID ],
					score
				};
			});

			return players;

		default:
			return state;
	}
}
