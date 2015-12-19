import React from 'react';
import { connect } from 'react-redux'; 
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
//--
import * as GameStateActions from '../actions/GameStateActions';
import * as HandActions from '../actions/HandActions';
import * as RoundStateActions from '../actions/RoundStateActions';
//--
import Toolbar from '../components/Toolbar/Toolbar';
import Loading from '../components/Loading/Loading';
import Board from '../components/Board/Board';
import './Game.less';

let mapStateToProps = (state) => ({
	gameState: state.gameState,
	roundState: state.roundState,
	hand: state.hand,
	players: state.players
});

let Game = React.createClass({

	componentDidMount: function () {
		const { gameState, hand, dispatch } = this.props;

		this.socket.on( 'game-started', (data) => {
			dispatch( GameStateActions.startGame(data) );
		});

		this.socket.on( 'starting-hand', (data) => {
			dispatch( HandActions.startingHand(data) );
		});
	},

	render: function () {
		const { gameState, roundState, players, hand, dispatch } = this.props;

		this.socket = io().connect('http://localhost:3002/' + gameState.gameKey + '/');

		console.log('--here');
		console.log( roundState );

		return (
			<div>
				<Toolbar gameState={gameState} gameStateActions={GameStateActions} roundState={roundState} roundStateActions={RoundStateActions} players={players} />
				<div className='Game'>
					{ !gameState.started ? 
						<Loading gameState={gameState} gameStateActions={GameStateActions} socket={this.socket} />
						:
						<Board 
							gameState={gameState}
							gameStateActions={GameStateActions}
							hand={hand}
							handActions={HandActions}
							roundState={roundState}
							roundStateActions={RoundStateActions}
							socket={this.socket} />
					}
				</div>
			</div>
		)
	}
});

export default DragDropContext(HTML5Backend)( connect( mapStateToProps )( Game ) );