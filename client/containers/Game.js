import React from 'react';
import { bindActionCreators } from 'redux';
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

	playCard: function (cardID, cardText) {
		const { dispatch } = this.props;
		const roundActions = bindActionCreators(RoundStateActions, dispatch);

		roundActions.playCard({
			cardID: cardID,
			cardText: cardText
		});

		this.socket.emit( 'play-card', {
			cardID: cardID
		});
	},

	chooseWinner: function (cardID, cardText) {
		const { dispatch } = this.props;
		const roundActions = bindActionCreators(RoundStateActions, dispatch);

		roundActions.chooseWinner({
			cardID: cardID,
			cardText: cardText
		});

		this.socket.emit( 'choose-winner', {
			cardID: cardID
		});
	},

	completeRound: function () {
		console.log( "Complete round" );
		this.socket.emit( 'complete-round' );
	},

	componentDidMount: function () {
		const { gameState, hand, dispatch } = this.props;

		this.socket.on( 'player-joined', (data) => {
			dispatch( GameStateActions.playerJoined(data) );
		});

		this.socket.on( 'game-started', (data) => {
			dispatch( GameStateActions.startGame(data) );
		});

		this.socket.on( 'new-round', (data) => {
			dispatch( RoundStateActions.newRound(data) );
		});

		this.socket.on( 'starting-hand', (data) => {
			dispatch( HandActions.startingHand(data) );
		});

		this.socket.on( 'card-played', (data) => {
			dispatch( RoundStateActions.cardPlayed(data) );

			if( !_.isUndefined( data.lastCard ) && data.lastCard ){
				setTimeout( () => dispatch( RoundStateActions.allCardsPlayed() ), 2000 );
				setTimeout( () => dispatch( RoundStateActions.choosingAnswer() ), 4000 );
			}
		});

		this.socket.on( 'replacement-card', (data) => {
			setTimeout( () => dispatch( HandActions.replaceCard(data), 1500 ) );
		});

		this.socket.on( 'winner-chosen', (data) => {
			dispatch( RoundStateActions.declareWinner(data) );
		});
	},

	render: function () {
		const { gameState, roundState, players, hand, dispatch } = this.props;
		const roundActions = bindActionCreators(RoundStateActions, dispatch);
		const handActions = bindActionCreators(HandActions, dispatch);

		this.socket = io().connect('http://localhost:3002/' + gameState.gameKey + '/');
		let socketHandlers = {
			playCard: this.playCard,
			chooseWinner: this.chooseWinner,
			completeRound: this.completeRound
		};

		return (
			<div>
				<Toolbar gameState={gameState} gameStateActions={GameStateActions} roundState={roundState} roundActions={roundActions} players={players} />
				<div className='Game'>
					{ !gameState.started ?
						<Loading
							gameState={gameState}
							gameStateActions={GameStateActions}
							socket={this.socket}
							players={players} />
						:
						<Board
							gameState={gameState}
							gameStateActions={GameStateActions}
							hand={hand}
							handActions={handActions}
							roundState={roundState}
							roundActions={roundActions}
							players={players}
							socketHandlers={socketHandlers} />
					}
				</div>
			</div>
		)
	}
});

export default DragDropContext(HTML5Backend)( connect( mapStateToProps )( Game ) );
