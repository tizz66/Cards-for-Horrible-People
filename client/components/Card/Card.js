import React from 'react';
import { Motion, spring } from 'react-motion';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import './Card.less';

export class Card extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		const classes = {
			'Card': true,
			['Card-' + this.props.card.type]: true,
			'is-dragging': this.props.isDragging,
			'is-draggable': this.props.canDrag,
			'is-hidden': this.props.card.hidden
		};

		return (
			<Motion defaultStyle={ {y: ( this.props.flipped ? 180 : 0 )} } style={ {y: ( this.props.flipped ? 180 : 0 )} }>
				{ style =>
					<div className={ classNames( classes ) } onClick={ this.props.onClick || null } style={ {transform: `rotateY(${style.y}deg)`} }>
						<div className='Card-back'>
							<p>Cards for horrible people</p>
						</div>
						<div className='Card-front'>
							<p>{ this.props.card.text }</p>
						</div>
					</div>
				}
			</Motion>
		);
	}
}
