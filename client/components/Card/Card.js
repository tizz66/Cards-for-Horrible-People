import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import './Card.less';

let Card = React.createClass({
	render: function () {

		let classes = {
			'Card': true,
			['Card-' + this.props.card.type]: true,
			'is-dragging': this.props.isDragging,
			'is-draggable': this.props.canDrag,
			'is-hidden': this.props.card.hidden,
			'is-flipped': this.props.flipped
		};

		return (
			<div className={classNames( classes )} onClick={ this.props.onClick || null }>
				<div className='Card-back'>
					<p>Cards for horrible people</p>
				</div>
				<div className='Card-front'>
					<p>{this.props.card.text} {this.props.card.hidden ? 'HIDDEN' : null}</p>
				</div>
			</div>
		);
	}
});

export default Card;