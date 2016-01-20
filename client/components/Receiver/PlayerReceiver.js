import React from 'react';
import { ItemTypes } from '../../constants/ItemTypes';
import { DropTarget } from 'react-dnd';
import { Card } from '../Card/Card';
import { collect, receiverTarget } from './dropTarget.js';
import classNames from 'classnames';
import './Receiver.less';

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
