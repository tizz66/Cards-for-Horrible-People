import React from 'react';
import classNames from 'classnames';
import './Card.less';

let Card = React.createClass({
	render: function () {

		let classes = {
			'Card': true,
			['Card-' + this.props.cardType]: true,
			'Card-dragging': this.props.isDragging,
			'Card-draggable': this.props.canDrag
		};

		return (
			<div className={classNames( classes )}>
				<p>{this.props.cardText}</p>
			</div>
		);
	}
});

export default Card;