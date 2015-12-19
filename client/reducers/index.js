import { combineReducers } from 'redux';
import gameState from './gameState';
import roundState from './roundState';
import errors from './errors';
import hand from './hand';
import players from './players';

const reducers = {
	roundState,
	gameState,
	errors,
	hand,
	players,
};

export default reducers;