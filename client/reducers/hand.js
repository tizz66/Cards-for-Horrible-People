import * as types from '../constants/ActionTypes';

const initialState = [
	{
		id: 145,
		text: "Wearing underwear inside-out to avoid doing laundry."
	},
	{
		id: 146,
		text: "Flying sex snakes."
	},
	{
		id: 147,
		text: "Getting so angry that you pop a boner."
	},
	{
		id: 148,
		text: "Same-sex ice dancing."
	},
	{
		id: 149,
		text: "Glenn Beck being harried by a swarm of buzzards."
	},
	{
		id: 150,
		text: "Dead babies."
	},
	{
		id: 151,
		text: "Figgy pudding."
	}
];

export default function gameState( state = initialState, action ) {

	switch( action.type ){
		default:
			return state;
	}
}