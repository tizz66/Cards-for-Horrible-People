import React from 'react';
import { TransitionMotion, spring, presets } from 'react-motion';
import { Player } from '../Player/Player';
import { LoadingThrobber } from './LoadingThrobber';
import './Loading.less';

export class Loading extends React.Component {

	constructor (props) {
		super(props);
	}

	static defaultProps = {
		players: {}
	};

	getDefaultValue () {
		const { players } = this.props;
		const configs = {};

		_.forEach( players, (player, playerID) => {
			configs[ playerID ] = {
				opacity: spring(1),
				y: spring(0)
			};
		});

		return configs;
	}

	getEndValue () {
		const { players } = this.props;
		const configs = {};

		_.forEach( players, (player, playerID) => {
			configs[ playerID ] = {
				opacity: spring(0, [30,40]),
				y: spring(-200, [30,40])
			};
		});

		return configs;
	}

	willLeave (player, styleThatJustLeft) {
		return {
			opacity: spring(0),
			y: spring(-100),
		};
	}

	willEnter (player) {
		return {
			opacity: spring(1),
			y: spring(0)
		};
	}

	startGame = (e) => {
		e.preventDefault();

		this.props.socket.emit('start-game');
	};

	getButtonText () {
		const { gameState, players } = this.props;
		const playerCount = _.size( players );

		return ( playerCount > 1 ) ? `Start game with ${playerCount} players` : 'Waiting for players...';
	}

	render () {
		const { gameState, players } = this.props;
		const disabled = _.size( players ) < 2 ? true : false;

		return (
			<div className='Loading'>
				<div className='Loading-panels'>
					<div>
						<h3>Your gamekey</h3>
						<span className='Loading-gameKey'>
							{ gameState.gameKey.split('').map( (char) => {
								return <span>{ char }</span>;
							}) }
						</span>

						<div className='Loading-help'>
							Share this gamekey with friends to invite them to your game.
						</div>
					</div>

					<div>
						<span className='Loading-throbber'></span>
					</div>

					{ gameState.owner == gameState.playerID &&
						<div>
							<button className='App-button Loading-submit' disabled={ disabled } onClick={ this.startGame }>{ this.getButtonText() }</button>
						</div>
					}
				</div>

				<TransitionMotion
					defaultStyles={ this.getDefaultValue() }
					styles={ this.getEndValue() }
					willEnter={ this.willEnter }
					willLeave={ this.willLeave }
				>
						{ configs =>
							<ul className='Loading-users'>
								{ Object.keys( configs ).map( playerID => {
									const config = configs[ playerID ];
									const { opacity, y } = config;

									if( playerID !== gameState.playerID ){
										return (
											<li key={ playerID } style={ {opacity: opacity, transform: `translateY(${y}px)`} }>
												<Player player={ players[ playerID ] } subText='Joined the game' />
											</li>
										);
									}
								}) }
							</ul>
						}
				</TransitionMotion>
			</div>
		);
	}
}
