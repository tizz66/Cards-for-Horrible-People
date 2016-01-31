import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Motion, spring } from 'react-motion';
import { Hand } from '../Hand/Hand';
import { Card } from '../Card/Card';
import { DraggableCardPreview } from '../DraggableCard/DraggableCardPreview';
import { PlayerReceiver } from '../Receiver/PlayerReceiver';
import { Countdown } from '../Countdown/Countdown';
import { Timer } from '../Timer/Timer';
import { LoadingThrobber } from '../Loading/LoadingThrobber';
import * as RoundStates from '../../constants/RoundStates';

export class PlayerBoard extends React.Component {

	animateOut = null;

	constructor (props) {
		super(props);
		this.state = {
			donePlayed: false,
			showPlayedLoader: false
		};
	}

	getDefaultValue () {
		return {
			scale: 1,
			y: 0,
			opacity: 1
		};
	}

	getPanelStyle () {
		return {
			scale: spring( this.state.donePlayed ? 0 : 1 ),
			y: spring( this.state.donePlayed ? -200 : 0 ),
			opacity: spring( this.state.donePlayed ? 0 : 1 )
		};
	}

	getTimerStyle () {
		const { roundState } = this.props;

		return {
			opacity: spring( roundState.played ? 0 : 1 )
		};
	}

	componentWillReceiveProps (nextProps) {
		const { roundState: newRoundState  } = nextProps;
		const { roundState } = this.props;

		// If we've played a card, set state with a timeout so that we can animate the cards out
		if( !_.isUndefined( newRoundState.played ) && _.isUndefined( roundState.played ) ){
			this.animateOut = setTimeout( () => this.setState({ donePlayed: true }), 2000 );
			this.showPlayedLoader = setTimeout( () => this.setState({ showPlayedLoader: true }), 3000 );
		}
	}

	componentWillUnmount () {
		clearTimeout( this.animateOut );
		clearTimeout( this.showPlayedLoader );
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

		return (
			<div className='Board'>
				<div>
					{ roundState.status <= RoundStates.ROUND_PENDING ?
						<div className='Board-panel'>
							<LoadingThrobber message='Waiting for question to be dealt...' />
						</div>
						:
						( this.state.showPlayedLoader ?
							<Motion defaultStyle={ {opacity: 0} } style={ {opacity: spring(1)} }>
								{ (styles) =>
									<div className='Board-panel' style={ {opacity: styles.opacity} }>
										<LoadingThrobber message='The round is being judged...' />
									</div>
								}
							</Motion>
							:
							<Countdown from={ 30 } onEnd={ socketHandlers.outOfTime } active={ _.isUndefined( roundState.played ) }>
								{ count =>
									<div>
										<Motion defaultStyle={ this.getDefaultValue() } style={ this.getTimerStyle() }>
											{ (styles) =>
												<Timer count={ count } start={ 30 } style={ { opacity: styles.opacity } } />
											}
										</Motion>
										<Motion defaultStyle={ this.getDefaultValue() } style={ this.getPanelStyle() }>
											{ (styles) =>
												<div className='Board-panel' style={ { opacity: styles.opacity, transform: `scale(${styles.scale}) translateY(${styles.y}px)`} }>
													<div className='Board-cardWrap'>
														{ !_.isUndefined( roundState.question ) && <Card card={ Object.assign( roundState.question, { type: 'black' } ) } /> }
													</div>
													<div className='Board-cardWrap'>
														<PlayerReceiver roundState={ roundState } roundActions={ roundActions } afterDrop={ socketHandlers.playCard } />
													</div>
												</div>
											}
										</Motion>
									</div>
								}
							</Countdown>
						)
					}
					{ roundState.status >= RoundStates.QUESTION_FLIPPED &&
						<Hand cards={ hand } canDrag={ _.isUndefined( roundState.played ) } playCard={ roundActions.playCard } handActions={ handActions } />
					}
				</div>
				<DraggableCardPreview />
			</div>
		);
	}
}
