import React from 'react';
import './Card.less';

let Card = React.createClass({
	render: function () {
		return (
			<div className={ 'Card Card_' + ( this.props.cardType ) }>
				<p>{this.props.cardText}</p>
			</div>
		);
	}
});

export default Card;