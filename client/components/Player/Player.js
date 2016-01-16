import React from 'react';
import './Player.less';

const Player = React.createClass({

	render: function () {
		const { player, subText, showScores } = this.props;

		return (
			<div className='Player'>
				<span className='Player-avatar' style={ {background: `#${player.color}`} }>
					{ player.avatarText }
				</span>
				<div className='Player-info'>
					<h2>
						{ player.nickname }
					</h2>
					{ subText &&
						<p>{ subText }</p>
					}
				</div>
				{ showScores &&
					<span className='Player-score'>{ player.score }</span>
				}
			</div>
		);
	}
});

export default Player;
