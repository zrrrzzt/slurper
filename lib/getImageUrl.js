'use strict';

var cheerio = require('cheerio');

function getImageUrl(options, callback){

  if(!options){
    return callback(new Error('Missing required input: options'), null);
  }

  if(!options.data){
    return callback(new Error('Missing required input: options.data'), null);
  }

  if(!options.id){
    return callback(new Error('Missing required input: options.id'), null);
  }

  var $ = cheerio.load(options.data);
  var fileUrl = $(options.id).attr('src');

  if(!fileUrl){
    return callback(new Error('File url not found'), null);
  } else {
    return callback(null, fileUrl);
  }

}

module.exports = getImageUrl;