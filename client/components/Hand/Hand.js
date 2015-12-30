import React from 'react';
import Card from '../Card/Card';
import DraggableCard from '../DraggableCard/DraggableCard';
import './Hand.less';

let Hand = React.createClass({

	render: function () {
		const { cards, canDrag, flipped } = this.props;
		let hand = [];

		hand = ( cards || [] ).map( (card) => {
			return (
				<li key={card.id}>
					<DraggableCard card={ card } canDrag={canDrag} flipped={flipped} />
				</li>
			)
		});

		return (
			<div className='Hand'>
				<ul>
					{hand}
				</ul>
			</div>
		);
	}
});

export default Hand;