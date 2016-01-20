import React from 'react';
import './Loading.less';

export class LoadingThrobber extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className='LoadingThrobber'>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				{ this.props.message &&
					<p>{ this.props.message }</p>
				}
			</div>
		);
	}
}
