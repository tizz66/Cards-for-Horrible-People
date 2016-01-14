import React from 'react';
import _ from 'lodash';

let Countdown = React.createClass({
	propTypes: {
		from: React.PropTypes.number.isRequired,
		children: React.PropTypes.func.isRequired,
		onEnd: React.PropTypes.func
	},

	getInitialState: function () {
		return {
			count: this.props.from
		}
	},

	getDefaultProps: function () {
		return {
			active: true
		};
	},

	start: function () {
		this.interval = setInterval( this.tick, 1000 );
	},

	stop: function () {
		if( this.interval ){
			clearInterval( this.interval );
		}
	},

	tick: function () {
		this.setState({
			count: this.state.count - 1
		});

		if( this.state.count === 0 ){
			this.stop();

			if( this.props.onEnd ){
				this.props.onEnd();
			}
		}
	},

	componentDidMount: function () {
		this.start();
	},

	componentWillUnmount: function () {
		this.stop();
	},

	render: function () {
		return this.props.children( this.state.count );
	}
});

export default Countdown;
