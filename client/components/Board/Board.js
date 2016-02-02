import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import * as RoundStates from '../../constants/RoundStates';
import { JudgeBoard } from './JudgeBoard';
import { PlayerBoard } from './PlayerBoard';
import { WinnerBoard } from './WinnerBoard';
import { ScoreBoard } from './ScoreBoard';
import './Board.less';

export class Board extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		const { roundState, gameState } = this.props;

		if( roundState.status >= RoundStates.SHOWING_SCORES ){
			return ( <ScoreBoard {...this.props } /> );
		} else if( roundState.status >= RoundStates.WINNER_DECLARED ){
			return ( <WinnerBoard {...this.props } /> );
		} else if( roundState.judgeID === gameState.playerID ){
			return ( <JudgeBoard {...this.props} /> );
		} else if( !_.isUndefined( roundState.judgeID ) ){
			return ( <PlayerBoard {...this.props} /> );
		}
	}
}
