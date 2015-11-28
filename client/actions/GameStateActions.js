import * as types from '../constants/ActionTypes';
import * as GameStateHandlers from '../handlers/GameStateHandlers';

export function joinGame(data) {
    return {
        type: types.JOIN_GAME,
    	promise: GameStateHandlers.joinGame( data )
    };
}

export function newGame(name) {
	console.log('here');
    return {
        type: types.NEW_GAME,
        name
    };
}