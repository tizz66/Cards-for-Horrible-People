import * as types from '../constants/ActionTypes';
import * as RoundStates from '../constants/RoundStates';
import _ from 'lodash';

const initialState = {};

export default function roundState( state = initialState, action ) {

	switch( action.type ){

		case types.NEW_ROUND:
			return Object.assign( {}, {
				judgeID: action.judgeID,
				question: action.question,
				status: RoundStates.FLIP_CARD
			} );

		case types.FLIP_QUESTION:
			return Object.assign( {}, state, {
				status: RoundStates.QUESTION_FLIPPED
			} );

		case types.START_ROUND:
			return Object.assign( {}, state, {
				status: RoundStates.RECEIVING_ANSWERS,
				received: []
			} );

		case types.PLAY_CARD:
			return Object.assign( {}, state, {
				played: {
					cardID: action.cardID,
					cardText: action.cardText
				}
			} );

		case types.CARD_PLAYED:
			return Object.assign( {}, state, {
				received: [
					...( state.received || [] ), {
						id: action.cardID,
						text: action.cardText,
						type: 'white'
					}
				]
			} );

		case types.ALL_CARDS_PLAYED:
			return Object.assign( {}, state, {
				received: _.shuffle( state.received ),
				status: RoundStates.ANSWERS_RECEIVED
			} );

		case types.READY_TO_CHOOSE:
			return Object.assign( {}, state, {
				status: RoundStates.CHOOSING_ANSWER
			} );

		case types.CHOOSE_WINNER:
			return Object.assign( {}, state, {
				status: RoundStates.WINNER_CHOSEN,
				winner: {
					cardID: action.cardID,
					cardText: action.cardText
				}
			} );

		case types.DECLARE_WINNER:
			return Object.assign( {}, state, {
				status: RoundStates.WINNER_DECLARED,
				winnerID: action.winnerID,
				winner: action.card
			} );

		case types.SHOW_SCORES:
			return Object.assign( {}, state, {
				status: RoundStates.SHOWING_SCORES
			} );

		default:
			return state;
	}
}
