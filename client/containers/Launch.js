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
			new: false
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
									<div className='form-group'>
										<input type='text' placeholder='Your nickname' className='form-control input-lg' ref={ (ref) => { this._nick1 = ref; } } />
									</div>
									<button className='btn btn-dark btn-block' onClick={ this.newGame }>Start Game</button>
								</div>
							</div>
						}
					</Motion>
				</div>
			</div>
		);
	}
}
