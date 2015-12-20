import React from 'react';
import Card from '../Card/Card';
import './Hand.less';

let Hand = React.createClass({

	render: function () {
		const { cards, canDrag } = this.props;
		let hand = [];

		_.forOwn( cards, (card, id) => {
			hand.push( <li key={id}>
				<Card cardID={id} cardType='white' cardText={card.text} canDrag={canDrag} />
			</li> );
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