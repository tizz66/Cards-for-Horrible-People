import React from 'react';
import Card from '../components/Card';

let Game = React.createClass({

	render: function () {
		return (
			<div>
				<h1>Game!</h1>
				<Card cardType="black" cardText="Dear Sir or Madam, We regret to inform you that the Office of ______ has denied your request for _____." />
				<Card cardType="white" cardText="Picking up girls at the abortion clinic." />
			</div>
		);
	}
});

export default Game;