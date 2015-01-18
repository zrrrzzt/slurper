'use strict';

var fs = require('fs');
var request = require('request');

function downloadFile(options, callback) {
  if(!options){
    return callback(new Error('Missing required input: options'), null);
  }

  if(!options.fileUrl){
    return callback(new Error('Missing required input: options.fileUrl'), null);
  }

  if(!options.fileName){
    return callback(new Error('Missing required input: options.fileName'), null);
  }

  var save = request(options.fileUrl).pipe(fs.createWriteStream(options.fileName));

  save.on('error', function(err){
    return callback(err, null);
  });

  save.on('finish', function(){
    return callback(null, {message:'File downloaded'});
  });
}

module.exports = downloadFile;