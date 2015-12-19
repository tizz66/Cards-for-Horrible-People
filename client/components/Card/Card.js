import React from 'react';
import { ItemTypes } from '../../constants/ItemTypes';
import { DragSource } from 'react-dnd';
import './Card.less';

const cardSource = {
	beginDrag(props) {
		console.log('dragging');
		return {
			cardID: props.cardID
		};
	}
};

function collect (connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
    	isDragging: monitor.isDragging()
	}
}

let Card = React.createClass({
	render: function () {
		const { connectDragSource, isDragging } = this.props;

		return connectDragSource(
			<div className={ 'Card Card_' + ( this.props.cardType ) }>
				{isDragging ? 'DRAGGING' : ''}
				<p>{this.props.cardText}</p>
			</div>
		);
	}
});

export default DragSource( ItemTypes.CARD, cardSource, collect )(Card);