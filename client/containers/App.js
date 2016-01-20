import React from 'react';
import { Redirect, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { renderDevTools } from '../utils/devTools';
import configureStore from '../store/configureStore';
import * as reducers from '../reducers';
//--
import { Game } from './Game';
import { Launch } from './Launch';

const store = configureStore();

export class App extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<Provider store={ store }>
					<Router>
						<Redirect from='/' to='/launch' />
						<Route path='/launch' component={ Launch } />
						<Route path='/game' component={ Game } />
					</Router>
				</Provider>

				{ renderDevTools(store) }
			</div>
		);
	}
}
