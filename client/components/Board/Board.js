import React from 'react';
import classNames from 'classnames';
import * as RoundStates from '../../constants/RoundStates';
import JudgeBoard from './JudgeBoard';
import PlayerBoard from './PlayerBoard';
import './Board.less';

let Board = React.createClass({
	render: function () {
		const { roundState, gameState } = this.props;

		let classes = {
			'Board': true,
			'Board-isJudging': ( roundState.judgeID === gameState.playerID )
		};

		return ( 
			<div className={ classNames( classes ) }>
				{ roundState.judgeID === gameState.playerID ?
					<JudgeBoard {...this.props} /> :
					<PlayerBoard {...this.props} /> }
			</div>
		)
	}
});

export default Board;