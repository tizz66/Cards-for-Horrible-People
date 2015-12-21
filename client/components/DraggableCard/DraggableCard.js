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
			cardID: props.cardID,
			cardText: props.cardText
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
		const { cardID, cardText, connectDragSource, isDragging, canDrag } = this.props;

		return connectDragSource(
			<div>
				<Card cardID={cardID} cardType='white' cardText={cardText} canDrag={canDrag} isDragging={isDragging} />
			</div>
		);
	}
});

export default DragSource( ItemTypes.CARD, cardSource, collect )(DraggableCard);