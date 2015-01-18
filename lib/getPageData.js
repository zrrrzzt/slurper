'use strict';

var request = require('request');
var validUrl = require('valid-url');

function getPageData(url, callback){

  if(!url){
    return callback(new Error('Missing required input: url'), null);
  }

  if(!validUrl.isWebUri(url)){
    return callback(new Error('Invalid url'), null);
  }

  request(url, function(error, response, body){
    if(error){
      return callback(error, null);
    }
    if (!error && response.statusCode === 200) {
      return callback(null, body.toString());
    } else {
      return callback(new Error('Unknown error. Status code: ' + response.statusCode), null);
    }
  });
}

module.exports = getPageData;