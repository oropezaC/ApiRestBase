var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var tvshowSchema = new Schema({
	title: 		{ type: String },
	year: 		{ type: Number },
	country: 	{ type: String },
	poster:  	{ type: String },
	seasons: 	{ type: Number },
	summary: 	{ type: String }    
});


var TVShow = mongoose.model('TVShow',tvshowSchema);

 module.exports.findAllTVShows = function() {
  	return new Promise(function (resolve, reject){
  		TVShow.find(function(err, tvshows) {
  			if(err){
  				resolve({err: true, description: err});
  			}else{
  				resolve({err: false , result: tvshows});
  			}
  		});
  	});
  };



module.exports.addTVShow = function (d) {
	return new Promise (function(resolve,reject){
		var tvshow = new TVShow(d);
		tvshow.save(function(err,tvshows){
			if (err){
				resolve({err: true, description: err});
			}else{
				resolve({err: false , result: tvshow});
			}
		})
	})
}


module.exports.updateTVShow = function (d) {
	return new Promise (function(resolve,reject){
		var tvId = {_id:d._id};
		TVShow.update(tvId,d, function(err,tvshows){
			if (err){
				resolve({err: true, description: err});
			}else{
				resolve({err: false , result: tvshows});
			}
		})
	})
}

module.exports.deleteTVShow = function (d) {
	return new Promise (function(resolve,reject){
		var tvId = {_id:d._id};
		TVShow.deleteOne(tvId, function(err,tvshows){
			if (err){
				resolve({err: true, description: err});
			}else{
				resolve({err: false , result: tvshows});
			}
		})
	})
}
