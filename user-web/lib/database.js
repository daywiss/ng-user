var config = require('./config/fancy-config')
var Client = require('level-fancy').Client
var client = new Client(config)
module.exports = client.connect().db
