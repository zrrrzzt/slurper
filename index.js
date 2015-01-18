'use strict';

var fs = require('fs');
var request = require('request');
var getImageUrl = require('./lib/getImageUrl');
var getPageData = require('./lib/getPageData');

function doSlurp(options, callback){
  if(!options){
    return callback(new Error('Missing required input: options'), null);
  }


}

module.exports = doSlurp;