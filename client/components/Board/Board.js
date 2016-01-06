import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import * as RoundStates from '../../constants/RoundStates';
import JudgeBoard from './JudgeBoard';
import PlayerBoard from './PlayerBoard';
import WinnerBoard from './WinnerBoard';
import './Board.less';

let Board = React.createClass({

	getBoardToDisplay: function () {
		const { roundState, gameState } = this.props;

		if( roundState.status >= RoundStates.WINNER_DECLARED ){
			return ( <WinnerBoard {...this.props } /> );
		} else if( roundState.judgeID === gameState.playerID ){
			return ( <JudgeBoard {...this.props} /> );
		} else if( !_.isUndefined( roundState.judgeID ) ){
			return ( <PlayerBoard {...this.props} /> );
		}
	},

	render: function () {
		const { roundState, gameState } = this.props;

		let classes = {
			'Board': true,
			'Board-isJudging': ( roundState.judgeID === gameState.playerID )
		};

		return (
			<div className={ classNames( classes ) }>
				{ this.getBoardToDisplay() }
			</div>
		)
	}
});

export default Board;
