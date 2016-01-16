import React from 'react';
import { Motion, spring } from 'react-motion';
import _ from 'lodash';
import classNames from 'classnames';
import Card from '../Card/Card';
import * as RoundStates from '../../constants/RoundStates';

const WinnerBoard = React.createClass({

	render: function () {
		const { roundState, roundActions, gameState, socketHandlers, hand, handActions, players } = this.props;
		const infoClasses = {
			'Board-winningUser': true,
			'is-user': ( roundState.winnerID === gameState.playerID )
		};

		return (
			<div className='Board is-judging' onClick={ roundActions.showScores }>
				<Motion defaultStyle={ {cardScale: 0, bubbleScale: 0} } style={ {cardScale: spring(1), bubbleScale: spring(1, [ 136, 42 ])} }>
					{
						style =>
							<div className='Board-winner' style={ {transform: `scale(${style.cardScale})`} }>
								<div className='Board-winningCard'>
									<div>
										<Card card={ Object.assign( roundState.question, { type: 'black' } ) } />
									</div>
									<div>
										<Card card={ Object.assign( roundState.winner, { type: 'white' } ) } />
									</div>
								</div>
								<div className={ classNames( infoClasses ) } style={ {transform: `scale(${style.bubbleScale})`} }>
									{ roundState.winnerID === gameState.playerID ?
										<p>You won this round!</p> :
										<p>{ players[ roundState.winnerID ].nickname } won this round</p>
									}
								</div>
							</div>
					}
				</Motion>
			</div>
		);
	}
});

export default WinnerBoard;
