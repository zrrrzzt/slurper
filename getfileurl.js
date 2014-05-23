'use strict';

var request = require('request')
  , cheerio = require('cheerio')
  ;

module.exports = function getFileUrl(opts, callback){

  if(!opts.url){
    return callback(new Error('Missing required param: url'), null);
  }

  return callback(null, {});

}