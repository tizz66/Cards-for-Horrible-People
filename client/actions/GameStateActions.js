import * as types from '../constants/ActionTypes';
import * as GameStateHandlers from '../handlers/GameStateHandlers';

export function joinGame(data) {
    return {
        type: types.JOIN_GAME,
    	promise: GameStateHandlers.joinGame( data )
    };
}

export function newGame(data) {
    return {
        type: types.NEW_GAME,
        promise: GameStateHandlers.newGame( data )
    };
}

export function startGame(data) {
    return {
        type: types.START_GAME,
        players: data.players,
        timeLimits: data.timeLimits,
        winCount: data.winCount
    };
}

export function playerJoined(data) {
    return {
        type: types.PLAYER_JOINED,
        player: data
    };
}
