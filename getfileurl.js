'use strict';

var request = require('request')
  , cheerio = require('cheerio')
  ;

module.exports = function getFileUrl(opts, callback){

  if(!opts.url){
    return callback(new Error('Missing required param: url'), null);
  }

  if(!opts.id){
    return callback(new Error('Missing required param: id'), null);
  }

  return callback(null, {});

}