import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import { default as TouchBackend } from 'react-dnd-touch-backend';
//--
import * as GameStateActions from '../actions/GameStateActions';
import * as HandActions from '../actions/HandActions';
import * as RoundStateActions from '../actions/RoundStateActions';
import * as RoundStates from '../constants/RoundStates';
//--
import { Toolbar } from '../components/Toolbar/Toolbar';
import { Loading } from '../components/Loading/Loading';
import { Board } from '../components/Board/Board';
import './Game.less';

const mapStateToProps = (state) => ({
	gameState: state.gameState,
	roundState: state.roundState,
	hand: state.hand,
	players: state.players
});

@DragDropContext( TouchBackend({ enableMouseEvents: true }) )
@connect( mapStateToProps )
export class Game extends React.Component {

	flipQuestion () {
		const { roundState, dispatch } = this.props;
		const roundActions = bindActionCreators(RoundStateActions, dispatch);

		// Only flip the question if the round is pending
		if( roundState.status <= RoundStates.ROUND_PENDING ){
			roundActions.flipQuestion();
			this.socket.emit( 'start-round' );
		}
	}

	playCard (cardID, cardText) {
		const { dispatch } = this.props;
		const roundActions = bindActionCreators(RoundStateActions, dispatch);

		roundActions.playCard({
			cardID: cardID,
			cardText: cardText
		});

		this.socket.emit( 'play-card', {
			cardID: cardID
		});
	}

	outOfTime () {
		// Pick a random card from the hand and play it
		const { hand } = this.props;
		const toPlay = _.sample( hand );

		this.playCard( toPlay.id, toPlay.text );
	}

	chooseWinner (cardID, cardText) {
		const { dispatch } = this.props;
		const roundActions = bindActionCreators(RoundStateActions, dispatch);

		roundActions.chooseWinner({
			cardID: cardID,
			cardText: cardText
		});

		this.socket.emit( 'choose-winner', {
			cardID: cardID
		});
	}

	completeRound () {
		this.socket.emit( 'complete-round' );
	}

	componentDidMount () {
		const { gameState, hand, dispatch } = this.props;
		
		// Error handling
		this.socket.on( 'disconnect', () => {
			//dispatch( GameStateActions.)
		});
		
		// Game events
		this.socket.on( 'player-joined', (data) => {
			dispatch( GameStateActions.playerJoined(data) );
		});

		this.socket.on( 'game-started', (data) => {
			dispatch( GameStateActions.startGame(data) );
		});

		this.socket.on( 'new-round', (data) => {
			dispatch( RoundStateActions.newRound(data) );
		});

		this.socket.on( 'round-started', () => {
			dispatch( RoundStateActions.startRound() );
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
	}

	render () {
		const { gameState, roundState, players, hand, dispatch } = this.props;
		const roundActions = bindActionCreators(RoundStateActions, dispatch);
		const handActions = bindActionCreators(HandActions, dispatch);

		this.socket = io.connect( `${__socketURI__}/${gameState.gameKey}` );
		
		const socketHandlers = {
			playCard: this.playCard.bind( this ),
			chooseWinner: this.chooseWinner.bind( this ),
			completeRound: this.completeRound.bind( this ),
			flipQuestion: this.flipQuestion.bind( this ),
			outOfTime: this.outOfTime.bind( this )
		};

		return (
			<div>
				{ gameState.started &&
					<Toolbar
						gameState={ gameState }
						gameStateActions={ GameStateActions }
						roundState={ roundState }
						roundActions={ roundActions }
						players={ players }	/>
				}
				<div className='Game'>
					{ !gameState.started || _.isUndefined( roundState.judgeID ) ?
						<Loading
							gameState={ gameState }
							gameStateActions={ GameStateActions }
							socket={ this.socket }
							players={ players } />
						:
						<Board
							gameState={ gameState }
							gameStateActions={ GameStateActions }
							hand={ hand }
							handActions={ handActions }
							roundState={ roundState }
							roundActions={ roundActions }
							players={ players }
							socketHandlers={ socketHandlers } />
					}
				</div>
			</div>
		);
	}
}
