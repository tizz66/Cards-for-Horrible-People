import React from 'react';
import _ from 'lodash';
import Hand from '../Hand/Hand';
import Receiver from '../Receiver/Receiver';
import './Board.less';

let Board = React.createClass({
	render: function () {
		console.log( this.props );

		return (
			<div className='Board'>
				<div className='Board-panel'>
					<div>
						
					</div>
					<div>
						<Receiver roundState={this.props.roundState} roundActions={this.props.roundActions} />
					</div>
				</div>
				<Hand cards={this.props.hand} canDrag={ _.isUndefined( this.props.roundState.played ) } />
			</div>
		)
	}
});

export default Board;