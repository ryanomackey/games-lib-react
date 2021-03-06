'use strict';

var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var db = require('monk')('localhost/gamesLib');
var users = db.get('users');

router.post('/signup', function(req, res) {
  users.find({email:req.body.email}).then(function(data) {
    if (data.length > 0) {
      res.json({message:'Email already exists.'});
      db.close();
    } else {
      bcrypt.hash(req.body.password, 10 , function(err, hash) {
        if (hash) {
          users.insert({email: req.body.email, password: hash}).then(function() {
            res.json({message:'Account successfully created.'});
            db.close();
          });
        }
      });
    }
  });
});

router.post('/login', function(req, res) {
  users.find({email:req.body.email}).then(function(data) {
    bcrypt.compare(req.body.password, data[0].password, function(err, success) {
      if (success) {
        var profile = {
          _id: data[0]._id,
          email: data[0].email
        };
        var token = jwt.sign(profile, process.env.SECRET);
        res.json({token: token});
      } else {
        res.json('Incorrect username or password.');
      }
    });
  });
});

module.exports = router;
