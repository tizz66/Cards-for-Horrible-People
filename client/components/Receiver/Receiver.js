import React from 'react';
import { ItemTypes } from '../../constants/ItemTypes';
import { DropTarget } from 'react-dnd';
import './Receiver.less';

const receiverTarget = {
	drop( props, monitor ) {
		console.log('DROPPING');
		console.log( props );
		console.log( monitor );
	}
};

function collect (connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	};
}

let Receiver = React.createClass({
	render: function () {
		const { connectDropTarget, isOver } = this.props;

		return connectDropTarget(
			<div className='Receiver'>{isOver ? 'OVER' : 'Receive'}</div>
		);
	}
});

export default DropTarget( ItemTypes.CARD, receiverTarget, collect )( Receiver );