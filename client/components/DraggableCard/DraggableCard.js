import React from 'react';
import { ItemTypes } from '../../constants/ItemTypes';
import { DragSource } from 'react-dnd';
import { Card } from '../Card/Card';

const cardSource = {
	canDrag(props) {
		return props.canDrag;
	},

	beginDrag(props) {
		return {
			cardID: props.card.id,
			cardText: props.card.text,
			card: props.card
		};
	}
};

@DragSource( ItemTypes.CARD, cardSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	connectDragPreview: connect.dragPreview(),
	isDragging: monitor.isDragging()
}) )
export class DraggableCard extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		const { connectDragSource, connectDragPreview, ...others } = this.props;

		return connectDragPreview(
			connectDragSource(
				<div>
					<Card {...others} />
				</div>
			)
		);
	}
}
