
var express = require('express');
var router = express.Router();
var tvShowCtrl = require('../controller/tvshow');

router.get('/tvshows', function (req,res){
 tvShowCtrl.findAllTVShows()
 .then(function(result){
  res.json(result);
});
})

router.post('/tvshow', function (req,res){
  var d = req.body;
  tvShowCtrl.addTVShow(d)
  .then(function(result){
    res.json(result);
  });
})

router.put('/tvshow', function (req,res){
  var d = req.body;
  tvShowCtrl.updateTVShow(d)
  .then(function(result){
    res.json(result);
  });
})


router.delete('/tvshow', function (req,res){
  var d = req.body;
  tvShowCtrl.deleteTVShow(d)
  .then(function(result){
    res.json(result);
  });
})


module.exports = router;
