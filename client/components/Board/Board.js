import React from 'react';
import _ from 'lodash';
import Hand from '../Hand/Hand';
import Receiver from '../Receiver/Receiver';
import './Board.less';

let Board = React.createClass({
	render: function () {
		return (
			<div className='Board'>
				<div className='Board-panel'>
					<div>
						
					</div>
					<div>
						<Receiver roundState={this.props.roundState} roundActions={this.props.roundActions} afterDrop={this.props.socketHandlers.playCard} />
					</div>
				</div>
				<Hand cards={this.props.hand} canDrag={ _.isUndefined( this.props.roundState.played ) } playCard={ this.props.roundActions.playCard } />
			</div>
		)
	}
});

export default Board;