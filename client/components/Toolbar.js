import React from 'react';
import _ from 'lodash';
import './Toolbar.less';

let Toolbar = React.createClass({

	render: function () {
		const { gameState, roundState, players, hand } = this.props;
		var text = '';

		if( !_.isUndefined( roundState.judgeID ) ){
			if( roundState.judgeID === gameState.playerID ){
				text = 'x cards in';
				text = players[ roundState.judgeID ].nickname + " is judging this round";
			} else {
				text = players[ roundState.judgeID ].nickname + " is judging this round";
			}
		}

		return (
			<div className='Toolbar'>
				{gameState.started ? <span className="Toolbar-text">{text}</span> : ''}
			</div>
		);
	}
});

export default Toolbar;