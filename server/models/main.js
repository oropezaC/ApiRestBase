conn = null;
mongoose = require('mongoose');
Promise = require('bluebird');


module.exports.start = function(){
	return new Promise(function(resolve, reject){
		var p1 = new Promise(function(resolve, reject){
			mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
				if(err) {
					console.log('ERROR: connecting to Database. ' + err);
				} else {
					var db = mongoose.connection;
					db.once('open' , function(){
						console.log('Connected to Database MongoDB');
						resolve();
					});
				}
			});	
		});

		Promise.settle([p1])
		.then(function(results){
			resolve();
		});
	});
};

