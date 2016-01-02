import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Hand from '../Hand/Hand';
import Card from '../Card/Card';
import * as RoundStates from '../../constants/RoundStates';

let DrawQuestionBoard = React.createClass({

	render: function () {
		const { roundState, roundActions, gameState, socketHandlers, hand } = this.props;

		let classes = {
			'Board': true
		};

		return (
			<div className={ classNames( classes ) }>
				<div className='Board-panel Board-selection'>
					<div>
						<Card card={ Object.assign( roundState.question, { type: 'black' } ) } flipped={ roundState.status == RoundStates.FLIP_CARD } onClick={ roundActions.flipQuestion } />
					</div>
				</div>
			</div>
		)
	}
});

export default DrawQuestionBoard;