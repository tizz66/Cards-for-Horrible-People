import React from 'react';
import { ItemTypes } from '../../constants/ItemTypes';
import { DropTarget } from 'react-dnd';
import { Card } from '../Card/Card';
import { collect, receiverTarget } from './dropTarget.js';
import classNames from 'classnames';
import './Receiver.less';

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
