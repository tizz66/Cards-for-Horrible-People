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
export class JudgeReceiver extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		const { connectDropTarget, isOver, roundState } = this.props;

		const classes = {
			'Receiver': true,
			'Receiver-showingCard': roundState.winner
		};

		return connectDropTarget(
			<div className={ classNames(classes) }>
				{ roundState.winner ? <Card card={ {id: roundState.winner.cardID, type: 'white', text: roundState.winner.cardText} } /> : null }
			</div>
		);
	}
}
