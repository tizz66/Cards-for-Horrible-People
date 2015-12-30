import _ from 'lodash';
import answers from '../data/answers';
import questions from '../data/questions';

export default class Deck {
	constructor () {
		this.liveAnswers = Object.keys(answers);
		this.liveQuestions = Object.keys(questions);
	}

	drawAnswers (count) {
		// Get some random card IDs from our liveanswers store
		let cardIDs = _.sample( this.liveAnswers, count );
		let cardData = [];
		// Get the info for them
		cardData = cardIDs.map( (id) => {
			return this.getCardData( id );
		});

		this.liveAnswers = _.without( this.liveAnswers, ...cardIDs );
		return cardData;
	}

	drawQuestion () {
		let cardID = _.sample( this.liveQuestions );
		let cardData = this.getCardData( cardID );

		this.liveQuestions = _.without( this.liveQuestions, cardID );
		return cardData;
	}

	getCardData (id) {
		if( !_.isUndefined( answers[id] ) ){
			return Object.assign( _.clone( answers[id] ), { id, type: 'white' } );
		} else if ( !_.isUndefined( questions[id] ) ){
			return Object.assign( _.clone( questions[id] ), { id, type: 'black' } );
		} else {
			return undefined;
		}
	}
}