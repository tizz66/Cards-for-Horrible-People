import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'; 
import * as GameStateActions from '../actions/GameStateActions';
import './Launch.less';

let mapStateToProps = (state) => ({
	gameState: state.gameState
});

let Launch = React.createClass({

	joinGame: function (e) {
		const { dispatch } = this.props;

		e.preventDefault();
		let gameKey = this._gameKey.value;
		let nickname = this._nick0.value;

		dispatch( GameStateActions.joinGame({
			gameKey,
			nickname
		}));
	},

	newGame: function (e) {
		const { dispatch } = this.props;

		e.preventDefault();
		let nickname = this._nick0.value;

		dispatch( GameStateActions.newGame({
			nickname
		}));
	},

	render: function () {
		const { gameState, dispatch } = this.props;

		return (
			<div>
				<h1>Cards for Offensive People.</h1>
				<div className='Launch'>
					<div className={ 'Launch-panel' + ( gameState.loading ? ' Launch-panel-isLoading' : '' )}>
						<h2><span>Join</span> an existing game</h2>
						<div className='row'>
							<div className="col-md-5 form-group">
								<input type='text' placeholder='Game code' className='form-control input-lg' ref={ (ref) => { this._gameKey = ref } } />
							</div>
							<div className="col-md-7 form-group">
								<input type='text' placeholder='Your nickname' className='form-control input-lg' ref={ (ref) => { this._nick0 = ref } } />
							</div>
						</div>
						<button className='btn btn-dark btn-block' onClick={this.joinGame}>Join Game</button>
					</div>
					<div className='Launch-panel'>
						<h2><span>Start</span> a new game</h2>
						<div className="form-group">
							<input type='text' placeholder='Your nickname' className='form-control input-lg' ref={ (ref) => { this._nick1 = ref } } />
						</div>
						<button className='btn btn-dark btn-block' onClick={this.newGame}>Start Game</button>
					</div>
				</div>
			</div>
		);
	}
});

export default connect( mapStateToProps )( Launch );