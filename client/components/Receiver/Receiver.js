import React from 'react';
import { ItemTypes } from '../../constants/ItemTypes';
import { DropTarget } from 'react-dnd';
import Card from '../Card/Card';
import classNames from 'classnames';
import './Receiver.less';

const receiverTarget = {
	drop( props, monitor ) {
		const { dispatch, roundActions } = props;
		let item = monitor.getItem();

		roundActions.playCard({
			cardID: item.cardID,
			cardText: item.cardText
		});		
	}
};

function collect (connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	};
}

let Receiver = React.createClass({
	render: function () {
		const { connectDropTarget, isOver, roundState } = this.props;

		let classes = {
			'Receiver': true,
			'Receiver-showingCard': roundState.played
		};

		return connectDropTarget(
			<div className={ classNames(classes) }>
				{roundState.played ? <Card cardID={roundState.played.cardID} cardType='white' cardText={roundState.played.cardText} /> : null}
			</div>
		);
	}
});

export default DropTarget( ItemTypes.CARD, receiverTarget, collect )( Receiver );