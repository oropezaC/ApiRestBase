var TvModel = require('../models/tvshow');

module.exports.findAllTVShows = function(){
	return new Promise(function(resolve, reject){
		TvModel.findAllTVShows()
		.then(function (result) {
			resolve(!result.err ? result.result : result);
		});
	});
}

module.exports.addTVShow = function(d){
	return new Promise(function(resolve, reject){
		console.log(d);
		TvModel.addTVShow(d)
		.then(function (result) {
			resolve(!result.err ? result.result : result);
		});
	});
}


module.exports.updateTVShow = function(d){
	return new Promise(function(resolve, reject){
		console.log(d);
		TvModel.updateTVShow(d)
		.then(function (result) {
			resolve(!result.err ? result.result : result);
		});
	});
}

module.exports.deleteTVShow = function(d){
	return new Promise(function(resolve, reject){
		console.log(d);
		TvModel.deleteTVShow(d)
		.then(function (result) {
			resolve(!result.err ? result.result : result);
		});
	});
}