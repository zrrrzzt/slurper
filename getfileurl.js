'use strict';

var request = require('request')
  , cheerio = require('cheerio')
  , validUrl = require('valid-url')
  ;


function parseForFileUrl(url, id, callback){
  request(url, function(error, response, body){
    if(error){
      return callback(err, null);
    }
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(body.toString())
        , fileUrl = $(id).attr('src')
        ;

      if(!fileUrl){
        return callback(new Error('File url not found'), null);
      } else {
        return callback(null, fileUrl);
      }

    } else {
      return callback(new Error('Unknown error. Status code: ' + response.statusCode), null);
    }
  });
}


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

  parseForFileUrl(opts.url, opts.id, function(err, fileurl){
    if(err){
      return callback(err, null);
    }
    return callback(null, fileurl);
  });

}