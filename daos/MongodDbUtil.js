var mongoConfig = require("../config/mongodb");

var url = mongoConfig.url;

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

module.exports.connect = function(callback) {
    MongoClient.connect(url, callback);
};