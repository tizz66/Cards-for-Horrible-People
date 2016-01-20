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
			cardText: props.card.text
		};
	}
};

@DragSource( ItemTypes.CARD, cardSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
}) )
export class DraggableCard extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		const { connectDragSource, ...others } = this.props;

		return connectDragSource(
			<div>
				<Card {...others} />
			</div>
		);
	}
}
