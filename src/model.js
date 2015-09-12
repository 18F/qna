var mongoose = require('mongoose');
var Question = mongoose.model('Question', 
	{
		rfq: String,
		question_title: String,
		question_text: String,
		answer: String,
		date_updated: { type: Date, default: Date.now }
	}
);

module.exports = Question