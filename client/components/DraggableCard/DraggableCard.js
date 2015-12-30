import React from 'react';
import { ItemTypes } from '../../constants/ItemTypes';
import { DragSource } from 'react-dnd';
import Card from '../Card/Card';

const cardSource = {
	canDrag(props) {
		return props.canDrag;
	},

	beginDrag(props) {
		return {
			cardID: props.card.id,
			cardText: props.card.text
		};
	}
};

function collect (connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
    	isDragging: monitor.isDragging()
	}
}

let DraggableCard = React.createClass({
	render: function () {
		const { card, connectDragSource, isDragging, canDrag, hidden, flipped } = this.props;

		return connectDragSource(
			<div>
				<Card card={card} canDrag={canDrag} isDragging={isDragging} flipped={flipped} />
			</div>
		);
	}
});

export default DragSource( ItemTypes.CARD, cardSource, collect )(DraggableCard);