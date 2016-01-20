import React from 'react';
import { TransitionMotion, spring } from 'react-motion';
import { Card } from '../Card/Card';
import { DraggableCard } from '../DraggableCard/DraggableCard';
import classNames from 'classnames';
import './Hand.less';

export class Hand extends React.Component {

	constructor (props) {
		super(props);
	}

	static defaultProps = {
		cards: [],
		style: {
			opacity: 1,
			y: 0
		}
	};

	getDefaultValue () {
		const { cards } = this.props;
		const configs = {};

		cards.forEach( (card, idx) => {
			configs[ `${idx}_${card.id}` ] = {
				opacity: spring(0),
				y: spring(100),
				card: card
			};
		});

		return configs;
	}

	getEndValue () {
		const { cards } = this.props;
		const configs = {};

		cards.forEach( (card, idx) => {
			configs[ `${idx}_${card.id}` ] = {
				opacity: spring(1),
				y: spring(0),
				card: card
			};
		});

		return configs;
	}

	willLeave (card, styleThatJustLeft) {
		return {
			opacity: spring(1),
			y: spring(0),
			card: card
		};
	}

	willEnter (card) {
		return {
			opacity: spring(0),
			y: spring(100),
			card: card
		};
	}

	render () {
		const { cards, canDrag, allFlipped, handActions } = this.props;
		const classes = {
			'Hand': true
		};

		return (
			<div className={ classNames( classes ) } style={ {opacity: this.props.style.opacity, transform: `translateY(${this.props.style.y}px)`} }>
				<TransitionMotion
					defaultStyles={ this.getDefaultValue() }
					styles={ this.getEndValue() }
					willLeave={ this.willLeave }
					willEnter={ this.willEnter }
				>
					{ configs =>
						<ul>
							{ Object.keys( configs ).map( tmpID => {
								const config = configs[ tmpID ];
								const { card, opacity, y } = config;

								return (
									<li key={ card.id } style={ {
											opacity,
										 	transform: `translateY(${y}%)`
										} }
									>
										<DraggableCard
											card={ card }
											canDrag={ canDrag && !card.new }
											flipped={ allFlipped || card.new }
											onClick={ card.new ? () => { handActions.markCardSeen( card.id ); } : null } />
									</li>
								);
							}) }
						</ul>
					}
				</TransitionMotion>
			</div>
		);
	}
}
