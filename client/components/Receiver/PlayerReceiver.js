import React from 'react';
import { ItemTypes } from '../../constants/ItemTypes';
import { DropTarget } from 'react-dnd';
import Card from '../Card/Card';
import { collect, receiverTarget } from './dropTarget.js';
import classNames from 'classnames';
import './Receiver.less';

const PlayerReceiver = React.createClass({

	render: function () {
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
});

export default DropTarget( ItemTypes.CARD, receiverTarget, collect )( PlayerReceiver );
