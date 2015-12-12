import React from 'react';
import { connect } from 'react-redux'; 
import * as GameStateActions from '../actions/GameStateActions';
import Hand from '../components/Hand';
import Toolbar from '../components/Toolbar';
import Loading from '../components/Loading';
import './Game.less';

let mapStateToProps = (state) => ({
	gameState: state.gameState,
	hand: state.hand
});

let Game = React.createClass({

	componentDidMount: function () {
		const { gameState, hand, dispatch } = this.props;

		this.socket.on('game-started', function () {
			console.log('game-started');
		});
	},

	render: function () {
		const { gameState, hand, dispatch } = this.props;

		this.socket = io().connect('http://localhost:3002/' + gameState.gameKey + '/');

		return (
			<div>
				<Toolbar gameState={gameState} gameStateActions={GameStateActions} />
				<div className='Game'>
					{ !gameState.started ? 
						<Loading gameState={gameState} gameStateActions={GameStateActions} socket={this.socket} />
						:
						<Hand cards={hand} />
					}
				</div>
			</div>
		)
	}
});

export default connect( mapStateToProps )( Game );