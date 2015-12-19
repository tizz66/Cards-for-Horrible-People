import React from 'react';
import Hand from '../components/Hand';
import './Board.less';

let Board = React.createClass({
	render: function () {
		return (
			<div className='Board'>
				<div className='Board-panel'>
					<div className='col-md-6'>
						
					</div>
					<div className='col-md-6'>
						Dropzone
					</div>
				</div>
				<Hand cards={this.props.hand} />
			</div>
		)
	}
});

export default Board;