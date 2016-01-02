import React from 'react';
import Card from '../Card/Card';
import DraggableCard from '../DraggableCard/DraggableCard';
import classNames from 'classnames';
import './Hand.less';

let Hand = React.createClass({

	getInitialState: function () {
		return {
			showing: this.props.roundState || true
		}
	},

	render: function () {
		const { cards, canDrag, flipped } = this.props;

		let hand = ( cards || [] ).map( (card) => {
			return (
				<li key={card.id}>
					<DraggableCard card={ card } canDrag={canDrag} flipped={flipped} />
				</li>
			)
		});

		let classes = {
			'Hand': true,
			'Hand-hidden': this.props.hidden
		};

		return (
			<div className={ classNames( classes ) }>
				<ul>
					{hand}
				</ul>
			</div>
		);
	}
});

export default Hand;