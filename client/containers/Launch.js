import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring, presets } from 'react-motion';
import _ from 'lodash';
import * as GameStateActions from '../actions/GameStateActions';
import './Launch.less';
import '../components/Card/Card.less';

const mapStateToProps = (state) => ({
	gameState: state.gameState,
	errors: state.errors
});

@connect( mapStateToProps )
export class Launch extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			joinError: false,
			join: false,
			new: false,
			winCount: 5,
			timeLimits: 1
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
		const timeLimits = this.state.timeLimits;
		const winCount = this.state.winCount;

		dispatch( GameStateActions.newGame({
			nickname,
			timeLimits,
			winCount
		})).then( () => {
			if( this.props.gameState.loaded ){
				history.pushState(null, '/game');
			}
		});
	};

	showForm = (e, type) => {
		e.preventDefault();

		this.setState({
			[type]: true,
			[type == 'join' ? 'new' : 'join']: false
		});
	};

	closeForm = (e) => {
		e.preventDefault();

		this.setState({
			'join': false,
			'new': false
		});
	};

	getDefaultValue (type) {
		return {
			scale: 0.45,
			rY: 0,
			rZ: type == 'join' ? -10 : 10,
			tX: type == 'join' ? -150 : 150,
			tY: -100,
			zIndex: type == 'join' ? 100 : 200,
		};
	}

	getStyle (type) {
		const springVal = presets.stiff;
		const on = this.state[ type ];
		const defaultVal = this.getDefaultValue( type );

		return {
			scale: on ? spring(1, springVal) : spring( defaultVal.scale ),
			rY: on ? spring(-180, springVal) : spring( defaultVal.rY ),
			rZ: on ? spring(0, springVal) : spring( defaultVal.rZ ),
			tX: on ? spring(0, springVal) : spring( defaultVal.tX ),
			tY: on ? spring(30, springVal) : spring( defaultVal.tY ),
			zIndex: on ? 300 : defaultVal.zIndex
		};
	}

	buildStyle (styles) {
		return {
			transform: `scale(${styles.scale}) rotateY(${styles.rY}deg) rotateZ(${styles.rZ}deg) translateX(${styles.tX}px) translateY(${styles.tY}px)`,
			zIndex: styles.zIndex
		};
	}

	changeWinCount = (e) => {
		this.setState({
			winCount: parseInt( e.currentTarget.value )
		});

		console.log( this.state );
	};

	changeTimeLimit = (e) => {
		this.setState({
			timeLimits: parseInt( e.currentTarget.value )
		});

		console.log( this.state );
	};

	render () {
		const { gameState, dispatch } = this.props;

		return (
			<div className='Launch'>
				<h1>Cards for Horrible People</h1>
				<p>(A crappy tribute to Cards Against Humanity)</p>
				<div>
					<Motion defaultStyle={ this.getDefaultValue('join') } style={ this.getStyle('join') }>
						{ (styles) =>
							<div className='Card Card-black' style={ this.buildStyle(styles) }>
								<div className='Card-front' onClick={ (e) => this.showForm(e, 'join') }>
									<h2>Join</h2>
									<span>existing game</span>
								</div>
								<div className='Card-back'>
									<a href='#' className='Launch-cardClose' onClick={ this.closeForm }>&times;</a>
									<ul className='Launch-form'>
										<li>
											<label>Game Code</label>
											<input type='text' placeholder='e.g. ABC123' ref={ (ref) => { this._gameKey = ref; } } />
										</li>
										<li>
											<label>Your Nickname</label>
											<input type='text' ref={ (ref) => { this._nick0 = ref; } } />
										</li>
										{ !_.isUndefined( this.props.errors.joinError ) ? this.props.errors.joinError : '' }
									</ul>
									<div className='Launch-formSubmit'>
										<button type='submit' onClick={ this.joinGame }>Join Game</button>
									</div>
								</div>
							</div>
						}
					</Motion>
					<Motion defaultStyle={ this.getDefaultValue('new') } style={ this.getStyle('new') }>
						{ (styles) =>
							<div className='Card Card-white' style={ this.buildStyle(styles) }>
								<div className='Card-front' onClick={ (e) => this.showForm(e, 'new') }>
									<h2>Start</h2>
									<span>a new game</span>
								</div>
								<div className='Card-back'>
									<a href='#' className='Launch-cardClose' onClick={ this.closeForm }>&times;</a>
									<ul className='Launch-form'>
										<li>
											<label>Your Nickname</label>
											<input type='text' ref={ (ref) => { this._nick1 = ref; } } />
										</li>
										<li>
											<label>Rounds to win</label>
											<ol className='Launch-radioSelector'>
												{ [3, 5, 7, 9].map( (num) => {
													return (<li>
														<input
															type='radio'
															name='winCount'
															value={ num }
															checked={ this.state.winCount === num }
															onChange={ this.changeWinCount } />
														<span>{ num }</span>
													</li>);
												}) }
											</ol>
										</li>
										<li>
											<label>Time-limited rounds?</label>
											<ol className='Launch-radioSelector'>
												{ [1,0].map( (num) => {
													return (<li>
														<input
															type='radio'
															name='timeLimits'
															value={ num }
															checked={ this.state.timeLimits === num }
															onChange={ this.changeTimeLimit } />
														<span>{ num === 1 ? 'Yep' : 'Nope' }</span>
													</li>);
												}) }
											</ol>
										</li>
									</ul>
									<div className='Launch-formSubmit'>
										<button type='submit' onClick={ this.newGame }>Start Game</button>
									</div>
								</div>
							</div>
						}
					</Motion>
				</div>
			</div>
		);
	}
}
