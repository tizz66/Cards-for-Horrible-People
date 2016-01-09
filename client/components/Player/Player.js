import React from 'react';
import './Player.less';

let Player = React.createClass({

	render: function () {
		const { player, subText } = this.props;

		return (
			<div className='Player'>
				<span className='Player-avatar' style={{
					background: `#${player.color}`
				}}>
					{ player.avatarText }
				</span>
				<h2>
					{ player.nickname }
				</h2>
				{ subText &&
					<p>{ subText }</p>
				}
			</div>
		);
	}
});

export default Player;
