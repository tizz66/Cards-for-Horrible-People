import React from 'react';
import Hand from '../Hand/Hand';
import Receiver from '../Receiver/Receiver';
import './Board.less';

let Board = React.createClass({
	render: function () {
		return (
			<div className='Board'>
				<div className='Board-panel'>
					<div className='col-md-6'>
						
					</div>
					<div className='col-md-6'>
						<Receiver />
					</div>
				</div>
				<Hand cards={this.props.hand} />
			</div>
		)
	}
});

export default Board;