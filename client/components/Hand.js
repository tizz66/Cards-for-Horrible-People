import React from 'react';
import Card from './Card';
import './Hand.less';

let Hand = React.createClass({

	render: function () {
		return (
			<div className='Hand'>
				<ul>
					{ this.props.cards.map( (card, idx) => {
						return (
							<li key={card.id}>
								<Card cardType='white' cardText={card.text} />
							</li>
						);
					}) }
				</ul>
			</div>
		);
	}
});

export default Hand;