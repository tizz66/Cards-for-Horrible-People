import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Card from '../Card/Card';
import * as RoundStates from '../../constants/RoundStates';

let WinnerBoard = React.createClass({

	render: function () {
		const { roundState, roundActions, gameState, socketHandlers, hand, handActions, players } = this.props;
		const infoClasses = {
			'Board-winningUser': true,
			'is-user': ( roundState.winnerID === gameState.playerID )
		};

		return (
			<div>
				<div className='Board-winner'>
					<div className='Board-winningCard'>
						<div>
							<Card card={ Object.assign( roundState.question, { type: 'black' } ) } />
						</div>
						<div>
							<Card card={ Object.assign( roundState.winner, { type: 'white' } ) } />
						</div>
					</div>
					<div className={ classNames( infoClasses ) }>
						{ roundState.winnerID === gameState.playerID ?
							<p>You won this round!</p> :
							<p>{players[ roundState.winnerID ].nickname} won this round</p> }
					</div>
				</div>
			</div>
		)
	}
});

export default WinnerBoard;
