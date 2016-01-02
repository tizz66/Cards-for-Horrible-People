import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Hand from '../Hand/Hand';
import Card from '../Card/Card';
import PlayerReceiver from '../Receiver/PlayerReceiver';
import * as RoundStates from '../../constants/RoundStates';

let PlayerBoard = React.createClass({

	render: function () {
		const { roundState, roundActions, gameState, socketHandlers, hand } = this.props;

		// If a card has been played, then mark it as hidden
		if( roundState.played ){
			hand.map( (card) => {
				if( card.id == roundState.played.cardID ){
					card.hidden = true;
				}
			} );
		}

		let classes = {
			'Board': true
		};

		return (
			<div className={ classNames( classes ) }>
				<div className='Board-panel'>
					<div>
						{ !_.isUndefined( roundState.question ) ? <Card card={ Object.assign( roundState.question, { type: 'black' } ) } /> : null }
					</div>
					<div>
						<PlayerReceiver roundState={ roundState } roundActions={ roundActions } afterDrop={ socketHandlers.playCard } />
					</div>
				</div>
				<Hand cards={hand} canDrag={ _.isUndefined( roundState.played ) } playCard={ roundActions.playCard } />
			</div>
		)
	}
});

export default PlayerBoard;