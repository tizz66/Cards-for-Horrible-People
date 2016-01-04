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
		const classes = {
			'Board-panel': true,
			'Board-selection': ( roundState.status <= RoundStates.QUESTION_FLIPPED )
		};

		// @todo fix this, shouldn't be here
		if( roundState.winner ){
			roundState.received.map( (card) => {
				if( card.id == roundState.winner.cardID ){
					card.hidden = true;
				}
			} );
		}

		return (
			<div>
				<div className={ classNames( classes ) }>
					<div>
						{ !_.isUndefined( roundState.question ) &&
								<Card
									card={ Object.assign( roundState.question, { type: 'black' } ) }
									flipped={ roundState.status == RoundStates.FLIP_CARD }
									onClick={ roundActions.flipQuestion } />
						}
					</div>
					{ roundState.status >= RoundStates.CHOOSING_ANSWER &&
						<div>
							<JudgeReceiver
								roundState={roundState}
								roundActions={roundActions}
								afterDrop={socketHandlers.chooseWinner} />
						</div>
					}
				</div>
				{ roundState.status >= RoundStates.RECEIVING_ANSWERS &&
					<Hand
						cards={roundState.received}
						canDrag={ roundState.status == RoundStates.CHOOSING_ANSWER }
						allFlipped={ !( roundState.status >= RoundStates.ANSWERS_RECEIVED ) } />
				}
			</div>
		)
	}
});

export default JudgeBoard;
