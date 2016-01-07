import React from 'react';
import { TransitionMotion, spring } from 'react-motion';
import Card from '../Card/Card';
import DraggableCard from '../DraggableCard/DraggableCard';
import classNames from 'classnames';
import './Hand.less';

let Hand = React.createClass({

	getDefaultProps: function () {
		return {
			cards: []
		};
	},

	getDefaultValue: function () {
		const { cards } = this.props;
		let configs = {};

		cards.forEach( (card, idx) => {
			configs[ `${idx}_${card.id}` ] = {
				opacity: spring(0),
				y: spring(100),
				card: card
			};
		});

		return configs;
	},

	getEndValue: function () {
		const { cards } = this.props;
		let configs = {};

		cards.forEach( (card, idx) => {
			configs[ `${idx}_${card.id}` ] = {
				opacity: spring(1),
				y: spring(0),
				card: card
			};
		});

		return configs;
	},

	willLeave: function (card, styleThatJustLeft) {
		return {
			opacity: spring(1),
			y: spring(0),
			card: card
		};
	},

	willEnter: function (card) {
		return {
			opacity: spring(0),
			y: spring(100),
			card: card
		};
	},

	render: function () {
		const { cards, canDrag, allFlipped, handActions } = this.props;

		let classes = {
			'Hand': true,
			'Hand-hidden': this.props.hidden
		};

		return (
			<div className={ classNames( classes ) }>
				<TransitionMotion
					defaultStyles={ this.getDefaultValue() }
					styles={ this.getEndValue() }
					willLeave={ this.willLeave }
					willEnter={ this.willEnter } >
					{ configs =>
						<ul>
							{ Object.keys( configs ).map( tmpID => {
								const config = configs[ tmpID ];
								const { card, opacity, y } = config;

								return (
									<li key={ card.id } style={{
											opacity,
										 	transform: `translateY(${y}%)`
										}}>
										<DraggableCard
											card={ card }
											canDrag={ canDrag && !card.new }
											flipped={ allFlipped || card.new }
											onClick={ card.new ? () => { handActions.markCardSeen( card.id ) } : null } />
									</li>
								);
							})}
						</ul>
					}
				</TransitionMotion>
			</div>
		);
	}
});

export default Hand;
