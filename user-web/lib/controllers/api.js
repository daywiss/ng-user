'use strict';

var db = require('../database.js')
var passport = require('passport')
var JSONStream = require('JSONStream')

module.exports.get = {}
module.exports.post = {}
module.exports.del = {}
module.exports.put = {}

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  res.json([
    {
      name : 'HTML5 Boilerplate',
      info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }
  ]);
};
exports.post.users = function(req,res){
  console.log(req.body)
}
  
exports.get.users = function(req,res){
  db.users.createValueStream().on('data',function(data){
    console.log(data)
    res.send(data)
  })
  //db.users.createValueStream().pipe(JSONStream.stringify()).pipe(res)
  //console.log(req.body)
}
exports.post.login = passport.authenticate('local',
    {failureRedirect:'/'
    ,successRedirect:'/'})

exports.post.logout = function(req,res){
  req.logout()
  res.redirect('/')
}
