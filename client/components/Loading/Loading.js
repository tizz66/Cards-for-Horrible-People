import React from 'react';
import { TransitionMotion, spring, presets } from 'react-motion';
import Player from '../Player/Player';
import './Loading.less';

let Loading = React.createClass({

	getDefaultProps: function () {
		return {
			players: {}
		}
	},

	getDefaultValue: function () {
		const { players } = this.props;
		let configs = {};

		_.forEach( players, (player, playerID) => {
			configs[ playerID ] = {
				opacity: spring(1),
				y: spring(0)
			};
		});

		return configs;
	},

	getEndValue: function () {
		const { players } = this.props;
		let configs = {};

		_.forEach( players, (player, playerID) => {
			configs[ playerID ] = {
				opacity: spring(0, [30,40]),
				y: spring(-200, [30,40])
			};
		});

		return configs;
	},

	willLeave: function (player, styleThatJustLeft) {
		return {
			opacity: spring(0),
			y: spring(-100),
		};
	},

	willEnter: function (player) {
		return {
			opacity: spring(1),
			y: spring(0)
		};
	},

	startGame: function (e) {
		e.preventDefault();

		this.props.socket.emit('start-game');
	},

	render: function () {
		const { gameState, players } = this.props;

		return (
			<div className='Loading'>
				<TransitionMotion
					defaultStyles={ this.getDefaultValue() }
					styles={ this.getEndValue() }
					willEnter={ this.willEnter }
					willLeave={ this.willLeave }>
						{ configs =>
							<ul className='Loading-users'>
								{ Object.keys( configs ).map( playerID => {
									const config = configs[ playerID ];
									const { opacity, y } = config;

									return (
										<li key={playerID} style={{ opacity: opacity, transform: `translateY(${y}px)` }}>
											<Player player={ players[ playerID ] } subText="Joined the game" />
										</li>
									)
								})}
							</ul>
						}
				</TransitionMotion>
				<span className='Loading-throbber'></span>
				<h3>Game Key</h3>
				<span className='Loading-gameKey'>{ gameState.gameKey }</span>
				<br /><br />
				{ gameState.owner == gameState.playerID &&
					<a href='#' className='btn btn-primary' onClick={ this.startGame }>Start game</a>
				}
			</div>
		);
	}
});

export default Loading;
