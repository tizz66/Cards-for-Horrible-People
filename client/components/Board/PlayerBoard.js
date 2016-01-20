import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Hand } from '../Hand/Hand';
import { Card } from '../Card/Card';
import { PlayerReceiver } from '../Receiver/PlayerReceiver';
import { Countdown } from '../Countdown/Countdown';
import { Timer } from '../Timer/Timer';
import * as RoundStates from '../../constants/RoundStates';

export class PlayerBoard extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		const { roundState, roundActions, gameState, socketHandlers, hand, handActions } = this.props;

		// If a card has been played, then mark it as hidden
		// @todo fix this, shouldn't be here
		if( roundState.played ){
			hand.map( (card) => {
				if( card.id == roundState.played.cardID ){
					card.hidden = true;
				}
			} );
		}

		const classes = {
			'Board': true
		};

		return (
			<div className='Board'>
				<div>
					{ roundState.status <= RoundStates.ROUND_PENDING ?
						<div className='Board-panel'>
							<p>Waiting...</p>
						</div>
						:
						<div className='Board-panel'>
							<div>
								{ !_.isUndefined( roundState.question ) && <Card card={ Object.assign( roundState.question, { type: 'black' } ) } /> }
							</div>
							<div>
								<Countdown from={ 60 } onEnd={ () => alert("Time's up!") } active={ true }>
									{ count =>
										<div>
											<Timer count={ count } start={ 60 } />
											<PlayerReceiver roundState={ roundState } roundActions={ roundActions } afterDrop={ socketHandlers.playCard } />
										</div>
									}
								</Countdown>
							</div>
						</div>
					}
					{ roundState.status >= RoundStates.QUESTION_FLIPPED &&
						<Hand cards={ hand } canDrag={ _.isUndefined( roundState.played ) } playCard={ roundActions.playCard } handActions={ handActions } />
					}
				</div>
			</div>
		);
	}
}
