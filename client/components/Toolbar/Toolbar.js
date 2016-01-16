import React from 'react';
import _ from 'lodash';
import * as RoundStates from '../../constants/RoundStates';
import './Toolbar.less';

const Toolbar = React.createClass({

	getToolbarText: function () {
		const { gameState, roundState, players, hand } = this.props;

		if( _.isUndefined( roundState.judgeID ) ){
			return '';
		}

		if( roundState.judgeID === gameState.playerID ){
			switch( roundState.status ){
				case RoundStates.FLIP_CARD:
					return "Tap to reveal your question";
				break;
				case RoundStates.QUESTION_FLIPPED:
				case RoundStates.RECEIVING_ANSWERS:
					return _.size( roundState.received || {} ) + ' cards in';
				break;
				case RoundStates.CHOOSING_ANSWER:
					return "Choose your winning card";
				break;
				default:
					return '';
			}
		} else {
			return players[ roundState.judgeID ].nickname + " is judging this round";
		}
	},

	render: function () {
		const { gameState, roundState, players, hand } = this.props;
		const text = this.getToolbarText();

		return (
			<div className='Toolbar'>
				{ gameState.started ? <span className='Toolbar-text'>{ text }</span> : '' }
			</div>
		);
	}
});

export default Toolbar;
