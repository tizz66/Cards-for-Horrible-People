import React from 'react';
import { DragLayer } from 'react-dnd';
import { ItemTypes } from '../../constants/ItemTypes';
import { Card } from '../Card/Card';

@DragLayer( monitor => ({
	item: monitor.getItem(),
	itemType: monitor.getItemType(),
	initialClientOffset: monitor.getInitialClientOffset(),
	initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
	currentOffset: monitor.getSourceClientOffset(),
	isDragging: monitor.isDragging()
}))
export class DraggableCardPreview extends React.Component {

	constructor (props) {
		super(props);
	}

	getItemStyles () {
		const { currentOffset, initialClientOffset, initialSourceClientOffset } = this.props;

		if( !currentOffset ){
			return {
				display: 'none'
			};
		}

		console.log( currentOffset );
		console.log( initialClientOffset );
		console.log( initialSourceClientOffset );

		const { x, y } = currentOffset;
		const transform = `translate(${x}px, ${y}px)`;
		return {
			position: 'absolute',
			top: 0,
			left: 0,
			transform: transform,
			opacity: 0.6
		};
	}

	render () {
		const { item, itemType, isDragging } = this.props;

		if( !isDragging ){
			return <div></div>;
		}

		return (
			<div style={ {
				position: 'fixed',
				pointerEvents: 'none',
				zIndex: 1000,
				left: 0,
				top: 0,
				width: '100%',
				height: '100%'} }
			>
				<div style={ this.getItemStyles() }>
					<Card {...item} />
				</div>
			</div>
		);
	}
}
