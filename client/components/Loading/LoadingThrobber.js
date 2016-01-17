import React from 'react';
import './Loading.less';

const LoadingThrobber = React.createClass({

	render: function () {
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
});

export default LoadingThrobber;
