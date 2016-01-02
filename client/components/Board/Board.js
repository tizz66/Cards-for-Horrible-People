import React from 'react';
import * as RoundStates from '../../constants/RoundStates';
import DrawQuestionBoard from './DrawQuestionBoard';
import JudgeBoard from './JudgeBoard';
import PlayerBoard from './PlayerBoard';
import './Board.less';

let Board = React.createClass({
	render: function () {
		const { roundState, gameState } = this.props;

		if( roundState.judgeID === gameState.playerID && roundState.status <= RoundStates.QUESTION_FLIPPED ){
			return <DrawQuestionBoard {...this.props} />
		} else if( roundState.judgeID === gameState.playerID ){
			return <JudgeBoard {...this.props} />
		} else {
			return <PlayerBoard {...this.props} />
		}
	}
});

export default Board;