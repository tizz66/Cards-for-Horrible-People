import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as GameStateActions from '../actions/GameStateActions';
import './Launch.less';

const mapStateToProps = (state) => ({
	gameState: state.gameState,
	errors: state.errors
});

@connect( mapStateToProps )
export class Launch extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			joinError: false
		};
	}

	joinGame = (e) => {
		const { history, dispatch } = this.props;

		e.preventDefault();
		const gameKey = this._gameKey.value;
		const nickname = this._nick0.value;

		dispatch( GameStateActions.joinGame({
			gameKey,
			nickname
		})).then( () => {
			if( this.props.gameState.loaded ){
				history.pushState(null, '/game');
			}
		});
	};

	newGame = (e) => {
		const { history, dispatch } = this.props;

		e.preventDefault();
		const nickname = this._nick1.value;

		dispatch( GameStateActions.newGame({
			nickname
		})).then( () => {
			if( this.props.gameState.loaded ){
				history.pushState(null, '/game');
			}
		});
	};

	getButtonText () {
		const { gameState } = this.props;
		const playerCount = _.size( gameState.players );

		return ( playerCount > 1 ) ? `Start game with ${playerCount} players` : 'Start game';
	}

	render () {
		const { gameState, dispatch } = this.props;

		return (
			<div>
				<h1>Cards for Offensive People.</h1>
				<div className='Launch'>
					<div className={ 'Launch-panel' + ( gameState.loading ? ' Launch-panel-isLoading' : '' ) }>
						<h2><span>Join</span> an existing game</h2>
						<div className='row'>
							<div className='col-md-5 form-group'>
								<input type='text' placeholder='Game code' className='form-control input-lg' ref={ (ref) => { this._gameKey = ref; } } />
							</div>
							<div className='col-md-7 form-group'>
								<input type='text' placeholder='Your nickname' className='form-control input-lg' ref={ (ref) => { this._nick0 = ref; } } />
							</div>
							{ !_.isUndefined( this.props.errors.joinError ) ? this.props.errors.joinError : '' }
						</div>
						<button className='btn btn-dark btn-block' onClick={ this.joinGame }>Join Game</button>
					</div>
					<div className='Launch-panel'>
						<h2><span>Start</span> a new game</h2>
						<div className='form-group'>
							<input type='text' placeholder='Your nickname' className='form-control input-lg' ref={ (ref) => { this._nick1 = ref; } } />
						</div>
						<button className='btn btn-dark btn-block' onClick={ this.newGame }>{ this.getButtonText() }</button>
					</div>
				</div>
			</div>
		);
	}
}
