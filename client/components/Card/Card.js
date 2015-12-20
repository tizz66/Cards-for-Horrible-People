import React from 'react';
import { ItemTypes } from '../../constants/ItemTypes';
import { DragSource } from 'react-dnd';
import classNames from 'classnames';
import './Card.less';

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

let Card = React.createClass({
	render: function () {
		const { connectDragSource, isDragging } = this.props;

		let classes = {
			'Card': true,
			['Card-' + this.props.cardType]: true,
			'Card-dragging': isDragging
		};

		return connectDragSource(
			<div className={classNames( classes )}>
				<p>{this.props.cardText}</p>
			</div>
		);
	}
});

export default DragSource( ItemTypes.CARD, cardSource, collect )(Card);