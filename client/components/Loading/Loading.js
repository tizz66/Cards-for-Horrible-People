import React from 'react';
import './Loading.less';

let Loading = React.createClass({

	startGame: function (e) {
		e.preventDefault();

		console.log( this.props.socket );
		this.props.socket.emit('start-game');
	},

	getStartButton: function () {
		if( this.props.gameState.owner == this.props.gameState.playerID ){
			return (
				<a href='#' className='btn btn-primary' onClick={this.startGame}>Start game</a>
			);
		}
	},

	render: function () {
		return (
			<div className='Loading'>
				<span className='Loading-throbber'></span>
				<h3>Game Key</h3>
				<span className='Loading-gameKey'>{this.props.gameState.gameKey}</span>
				<br /><br />
				{this.getStartButton()}
			</div>
		);
	}
});

export default Loading;