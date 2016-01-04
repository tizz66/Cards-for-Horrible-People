import React from 'react';
import Card from '../Card/Card';
import DraggableCard from '../DraggableCard/DraggableCard';
import classNames from 'classnames';
import './Hand.less';

let Hand = React.createClass({

	render: function () {
		const { cards, canDrag, allFlipped, handActions } = this.props;

		let hand = ( cards || [] ).map( (card) => {
			return (
				<li key={card.id}>
					<DraggableCard
						card={ card }
						canDrag={ canDrag && !card.new }
						flipped={ allFlipped || card.new }
						onClick={ card.new ? () => { handActions.markCardSeen( card.id ) } : null } />
				</li>
			)
		});

		let classes = {
			'Hand': true,
			'Hand-hidden': this.props.hidden
		};

		return (
			<div className={ classNames( classes ) }>
				<ul>
					{hand}
				</ul>
			</div>
		);
	}
});

export default Hand;
