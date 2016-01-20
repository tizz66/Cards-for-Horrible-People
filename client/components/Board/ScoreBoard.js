import React from 'react';
import { Motion, spring, presets } from 'react-motion';
import _ from 'lodash';
import classNames from 'classnames';
import * as RoundStates from '../../constants/RoundStates';
import { Player } from '../Player/Player';

export class WinnerBoard extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		const { roundState, roundActions, gameState, socketHandlers, hand, handActions, players } = this.props;

		const playerScores = _.map( players, (player, playerID) => [ playerID, player.score ] );
		const sorted = playerScores.sort( (a, b) => b[1] - a[1] );

		return (
			<div className='Board Board-scores' onClick={ socketHandlers.completeRound }>
				<Motion defaultStyle={ {opacity: 0, scale: 0} } style={ {opacity: spring(1, presets.wobbly), scale: spring(1, presets.wobbly)} }>
					{ config =>
						<div style={ {opacity: config.opacity, transform: `scale(${config.scale})`} }>
							<ul>
								{ sorted.map( sortedPlayer =>
									<li key={ sortedPlayer[0] } className={ sortedPlayer[0] === gameState.playerID ? 'is-player' : '' }>
										<Player player={ players[ sortedPlayer[0] ] } showScores={ true } />
									</li>
								) }
								<li key='extra'>
									<button className='btn btn-block btn-primary btn-large'>Ready for next round</button>
								</li>
							</ul>
						</div>
					}
				</Motion>
			</div>
		);
	}
}
