import React from 'react';
import './Timer.less';

const Timer = React.createClass({

	getStyle: function () {
		return {
			strokeDasharray: 440,
			transition: 'all 1s linear',
			strokeDashoffset: 440 - ( this.props.count * ( 440 / this.props.start ) )
		};
	},

	render: function () {
		const { count } = this.props;

		return (
			<div className='Timer'>
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
});

export default Timer;
