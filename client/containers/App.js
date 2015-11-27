import React from 'react';
import { Redirect, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { renderDevTools } from '../utils/devTools';
import configureStore from '../store/configureStore';
import * as reducers from '../reducers';
//--
import Game from './Game';
import Launch from './Launch';

const store = configureStore();

var App = React.createClass({
	render: function () {
		return (
			<div>
				<Provider store={store}>
					<Router>
						<Redirect from="/" to="/launch" />
						<Route path="/launch" component={Launch} />
						<Route path="/game" component={Game} />
					</Router>
				</Provider>

				{renderDevTools(store)}
			</div>
		)
	}
});

export default App;