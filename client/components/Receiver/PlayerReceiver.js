import React from 'react';
import { ItemTypes } from '../../constants/ItemTypes';
import { DropTarget } from 'react-dnd';
import { Card } from '../Card/Card';
import classNames from 'classnames';
import './Receiver.less';

const receiverTarget = {
	drop( props, monitor ) {
		const { dispatch, roundActions } = props;
		const item = monitor.getItem();

		props.afterDrop(item.cardID, item.cardText);
	}
};

function collect (connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	};
}

@DropTarget( ItemTypes.CARD, receiverTarget, collect )
export class PlayerReceiver extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		const { connectDropTarget, isOver, roundState } = this.props;
		const classes = {
			'Receiver': true,
			'Receiver-showingCard': roundState.played
		};

		return connectDropTarget(
			<div className={ classNames(classes) }>
				{ roundState.played ? <Card card={ {id: roundState.played.cardID, type: 'white', text: roundState.played.cardText} } /> : null }
			</div>
		);
	}
}
