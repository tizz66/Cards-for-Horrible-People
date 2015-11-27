import * as types from '../constants/ActionTypes';
import * as LaunchHandlers from '../handlers/LaunchHandlers';

export function joinGame(data) {
    return {
        type: types.JOIN_GAME,
        payload: {
        	promise: LaunchHandlers.joinGame(data),
        }
    };
}

export function newGame(name) {
	console.log('here');
    return {
        type: types.NEW_GAME,
        name
    };
}