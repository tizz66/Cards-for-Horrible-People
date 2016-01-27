import React from 'react';
import './Timer.less';

export class Timer extends React.Component {

	constructor (props) {
		super(props);
	}

	getStyle () {
		return {
			strokeDasharray: 440,
			transition: 'all 1s linear',
			strokeDashoffset: 440 - ( this.props.count * ( 440 / this.props.start ) )
		};
	}

	render () {
		const { count, style } = this.props;

		return (
			<div className='Timer' style={ style }>
				<div className='Timer-count'>{ count }</div>
				<svg
					width='160'
					height='160'
					xmlns='http://www.w3.org/2000/svg'
					style={ {transform: 'rotate(-90deg)'} }
				>
						<g>
							<circle
								r='69.85699'
								cy='81'
								cx='81'
								strokeWidth='8'
								stroke='#fff'
								fill='none'
								style={ this.getStyle() } />
						</g>
				</svg>
			</div>
		);
	}
}
