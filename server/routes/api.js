'use strict';

var express = require('express');
var router = express.Router();
var https = require('https');

router.get('/search', function(req, res) {

  var query = encodeURI(req.query.query);

  var path = '/api/search/?api_key=' + process.env.GIANT_BOMB + '&format=json&limit=10&resources=game&query=' + query;

  var options = {
    hostname: 'www.giantbomb.com',
    path: path,
    method: 'GET',
    headers: {
      'User-Agent':'games-lib-react'
    }
  };

  function callback(response) {
    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      var parsed = JSON.parse(str);
      res.json(parsed);
    });
  }

  https.request(options, callback).end();

});

module.exports = router;

// http://www.giantbomb.com/api/search/?api_key=61bd0c308c0186965feda9e7dd90a7262b43ddf9&format=json&resources=game
