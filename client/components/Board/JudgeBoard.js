import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Hand from '../Hand/Hand';
import Card from '../Card/Card';
import JudgeReceiver from '../Receiver/JudgeReceiver';
import * as RoundStates from '../../constants/RoundStates';

let JudgeBoard = React.createClass({

	render: function () {
		const { roundState, roundActions, gameState, socketHandlers, hand } = this.props;

		let classes = {
			'Board': true,
			'Board-isJudging': true
		};

		return (
			<div className={ classNames( classes ) }>
				<div className='Board-panel'>
					<div>
						{ !_.isUndefined( roundState.question ) ? <Card card={ Object.assign( roundState.question, { type: 'black' } ) } /> : null }
					</div>
					{ roundState.status >= RoundStates.CHOOSING_ANSWER ? 
						<div>
							<JudgeReceiver roundState={roundState} roundActions={roundActions} afterDrop={socketHandlers.chooseWinner} />
						</div>
						: null
					}
				</div>
				<Hand cards={roundState.received} canDrag={ roundState.status == RoundStates.CHOOSING_ANSWER } flipped={ !( roundState.status >= RoundStates.ANSWERS_RECEIVED ) } />
			</div>
		)
	}
});

export default JudgeBoard;