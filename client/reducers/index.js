import { combineReducers } from 'redux';
import gameState from './gameState';
import errors from './errors';
import hand from './hand';

const reducers = {
	gameState,
	errors,
	hand
};

export default reducers;