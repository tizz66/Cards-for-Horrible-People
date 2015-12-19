import React from 'react';
import Card from './Card';
import './Hand.less';

let Hand = React.createClass({

	render: function () {
		let hand = [];

		_.forOwn( this.props.cards, (card, id) => {
			hand.push( <li key={id}>
				<Card cardType='white' cardText={card.text} />
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