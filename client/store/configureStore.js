import { createStore as initialCreateStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promiseMiddleware';
import { devTools, persistState } from 'redux-devtools';
import reducers from '../reducers';

const reducer = combineReducers(reducers);

const createStore = compose(
	applyMiddleware( thunk, promiseMiddleware ),
	devTools(),
	persistState( window.location.href.match(/[?&]debug_session=([^&]+)\b/) )
)( initialCreateStore );

export default function configureStore() {
	return createStore( reducer );
}
