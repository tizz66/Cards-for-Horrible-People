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
	};
}

const DraggableCard = React.createClass({
	render: function () {
		const { connectDragSource, ...others } = this.props;

		return connectDragSource(
			<div>
				<Card {...others} />
			</div>
		);
	}
});

export default DragSource( ItemTypes.CARD, cardSource, collect )(DraggableCard);
