import React from 'react';
import { Motion, spring } from 'react-motion';
import _ from 'lodash';
import classNames from 'classnames';
import Hand from '../Hand/Hand';
import Card from '../Card/Card';
import JudgeReceiver from '../Receiver/JudgeReceiver';
import * as RoundStates from '../../constants/RoundStates';

let JudgeBoard = React.createClass({

	getPanelDefault: function () {
		return {
			margin: this.props.roundState.status >= RoundStates.CHOOSING_ANSWER ? 200 : 0
		};
	},

	getPanelStyle: function () {
		return {
			margin: spring( this.props.roundState.status >= RoundStates.CHOOSING_ANSWER ? 200 : 0 )
		};
	},

	getQuestionDefault: function () {
		return {
			scale: 1.6,
			y: 50
		};
	},

	getQuestionStyle: function () {
		return {
			scale: ( this.props.roundState.status <= RoundStates.QUESTION_FLIPPED ) ? spring(1.6) : spring(1),
			y: ( this.props.roundState.status <= RoundStates.QUESTION_FLIPPED ) ? spring(50) : spring(0)
		};
	},

	render: function () {
		const { roundState, roundActions, gameState, socketHandlers, hand } = this.props;
		const panelClasses = {
			'Board-panel': true,
			'Board-selection': ( roundState.status <= RoundStates.QUESTION_FLIPPED ),
			'is-choosing': ( this.props.roundState.status >= RoundStates.CHOOSING_ANSWER )
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
			<div className='Board is-judging'>
				<Motion defaultStyle={ this.getPanelDefault() } style={ this.getPanelStyle() }>
					{ style =>
						<div className={ classNames( panelClasses ) }>
							{ !_.isUndefined( roundState.question ) &&
								<Motion defaultStyle={ this.getQuestionStyle() } style={ this.getQuestionStyle() }>
									{ cardStyle =>
										<div style={{ transform: `scale(${cardStyle.scale}) translateY(${cardStyle.y}px)`}}>
											<Card
												card={ Object.assign( roundState.question, { type: 'black' } ) }
												flipped={ roundState.status == RoundStates.FLIP_CARD }
												onClick={ roundActions.flipQuestion } />
										</div>
									}
								</Motion>
							}
							{ roundState.status >= RoundStates.CHOOSING_ANSWER &&
								<div style={{ marginLeft: `${style.margin}px` }}>
									<JudgeReceiver
										roundState={roundState}
										roundActions={roundActions}
										afterDrop={socketHandlers.chooseWinner} />
								</div>
							}
						</div>
					}
				</Motion>
				{ roundState.status >= RoundStates.RECEIVING_ANSWERS &&
					<Motion defaultStyle={{ y: 270, opacity: 0 }} style={{ y: spring(0), opacity: spring(1) }}>
						{ style =>
							<Hand
								cards={ roundState.received }
								canDrag={ roundState.status == RoundStates.CHOOSING_ANSWER }
								allFlipped={ !( roundState.status >= RoundStates.ANSWERS_RECEIVED ) }
								style={ style } />
						}
					</Motion>
				}
			</div>
		)
	}
});

export default JudgeBoard;
