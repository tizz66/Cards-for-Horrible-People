import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Hand from '../Hand/Hand';
import Card from '../Card/Card';
import Receiver from '../Receiver/Receiver';
import * as RoundStates from '../../constants/RoundStates';
import './Board.less';

let Board = React.createClass({

	renderDrawQuestion: function () {
		const { roundState, roundActions, gameState, socketHandlers, hand } = this.props;
		return (
			<div className='Board-panel Board-selection'>
				<div>
					<Card card={ Object.assign( roundState.question, { type: 'black' } ) } flipped={ roundState.status == RoundStates.FLIP_CARD } onClick={ roundActions.flipQuestion } />
				</div>
			</div>
		);
	},

	renderPlayerBoard: function () {
		const { roundState, roundActions, gameState, socketHandlers, hand } = this.props;
		return (
			<div>
				<div className='Board-panel'>
					<div>
						{ !_.isUndefined( roundState.question ) ? <Card card={ Object.assign( roundState.question, { type: 'black' } ) } /> : null }
					</div>
					<div>
						<Receiver roundState={roundState} roundActions={roundActions} afterDrop={socketHandlers.playCard} />
					</div>
				</div>
				<Hand cards={hand} canDrag={ _.isUndefined( roundState.played ) } playCard={ roundActions.playCard } />
			</div>
		);
	},

	renderJudgeBoard: function () {
		const { roundState, roundActions, gameState, socketHandlers, hand } = this.props;
		return (
			<div>
				<div className='Board-panel'>
					<div>
						{ !_.isUndefined( roundState.question ) ? <Card card={ Object.assign( roundState.question, { type: 'black' } ) } /> : null }
					</div>
				</div>
				<Hand cards={roundState.received} flipped={ !( roundState.status == RoundStates.ANSWERS_RECEIVED ) } />
			</div>
		);
	},

	render: function () {
		const { roundState, roundActions, gameState, socketHandlers, hand } = this.props;

		// If a card has been played, then mark it as hidden
		if( roundState.played ){
			hand.map( (card) => {
				if( card.id == roundState.played.cardID ){
					card.hidden = true;
				}
			} );
		}

		let output = '';
		let classes = {
			'Board': true,
			'Board-isJudging': roundState.judgeID == gameState.playerID
		};

		if( roundState.judgeID === gameState.playerID && [ RoundStates.FLIP_CARD, RoundStates.QUESTION_FLIPPED ].indexOf( roundState.status ) !== -1 ){
			output = this.renderDrawQuestion();
		} else if( roundState.judgeID === gameState.playerID ){
			output = this.renderJudgeBoard();
		} else {
			output = this.renderPlayerBoard();
		}

		return (
			<div className={ classNames( classes ) }>
				{output}
			</div>
		)
	}
});

export default Board;