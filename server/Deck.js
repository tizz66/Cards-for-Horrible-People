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
		let cardData = {};
		// Get the info for them
		cardIDs.map( (id) => {
			cardData[ id ] = this.getCardData( id );
		});

		return cardData;
	}

	getCardData (id) {
		if( !_.isUndefined( answers[id] ) ){
			return _.clone( answers[id] );
		} else if ( !_.isUndefined( questions[id] ) ){
			return _.clone( questions[id] );
		} else {
			return undefined;
		}
	}
}