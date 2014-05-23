'use strict';

var request = require('request')
  , cheerio = require('cheerio')
  , validUrl = require('valid-url')
  ;

module.exports = function getFileUrl(opts, callback){

  if(!opts.url){
    return callback(new Error('Missing required param: url'), null);
  }

  if(opts.url && !validUrl.isWebUri(opts.url)){
    return callback(new Error('Invalid url'), null);
  }

  if(!opts.id){
    return callback(new Error('Missing required param: id'), null);
  }

  return callback(null, {});

}