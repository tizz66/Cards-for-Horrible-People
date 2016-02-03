import React from 'react';
import _ from 'lodash';

export class Countdown extends React.Component {
	static propTypes = {
		from: React.PropTypes.number.isRequired,
		children: React.PropTypes.func.isRequired,
		onEnd: React.PropTypes.func,
		active: React.PropTypes.bool
	};

	static defaultProps = {
		active: true
	};

	constructor (props) {
		super(props);
		this.state = {
			count: props.from
		};
	}

	start () {
		this.interval = setInterval( this.tick.bind( this ), 1000 );
	}

	stop () {
		if( this.interval ){
			clearInterval( this.interval );
		}
	}

	tick () {
		this.setState({
			count: this.state.count - 1
		});

		if( this.state.count === 0 ){
			this.stop();

			if( this.props.onEnd ){
				this.props.onEnd();
			}
		}
	}

	componentWillReceiveProps (nextProps) {
		if( !nextProps.active ){
			this.stop();
		}
	}

	componentDidMount () {
		if( this.props.active ){
			this.start();
		}
	}

	componentWillUnmount () {
		this.stop();
	}

	render () {
		return this.props.children( this.state.count );
	}
}
