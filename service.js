var app = angular.module('quoteBook');

app.service('service', function($cookies){

	this.saveData = function(){
		$cookies.quotes = JSON.stringify(quotes);
		console.log($cookies);
	}

	this.getData = function(){
		return quotes;
	}
	this.addData = function(quoteObject){
		if (quoteObject.text && quoteObject.author) {
			quotes.push(quoteObject);
		};
	}
	this.removeData = function(quote){
		// if(quotes.indexOf(quote) !== -1){
		// 	quotes.splice(quotes.indexOf(quote), 1)
		// }
		console.log(quote);
		for(var i = 0; i < quotes.length; i++){
			console.log(quotes[i].text)
			if(quotes[i].text === quote){
				quotes.splice(i, 1);
			};
		}
	};

	var cookieQuotes = JSON.parse($cookies.quotes);

	console.log(cookieQuotes);

	var quotes =  cookieQuotes || [

    { text: '\"Life isn\'t about getting and having, it\'s about giving and being.\"', author: 'Kevin Kruse'},

    { text: '\"Whatever the mind of man can conceive and believe, it can achieve\"', author: 'Napoleon Hill'},

    { text: '\"Strive not to be a success, but rather to be of value.\"', author: 'Albert Einstein'},

    { text: '\"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.\"', author: 'Robert Frost'},

    { text: '\"The most difficult thing is the decision to act, the rest is merely tenacity.\"', author: 'Amelia Earhart'},

    { text: '\"Life is what happens to you while you\'re busy making other plans.\"', author: 'John Lennon'},

    { text: '\"What even is a jQuery?\"', author: 'Tyler S. McGinnis'}
  ];
});
