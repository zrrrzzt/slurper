'use strict';

var getImageUrl = require('./lib/getImageUrl');
var getPageData = require('./lib/getPageData');
var downloadFile = require('./lib/downloadFile');

function doSlurp(options, callback){
  if(!options){
    return callback(new Error('Missing required input: options'), null);
  }

  getPageData(options.url, function (error, data) {
    if(error){
      return callback(error, null);
    } else {
      var imageUrlOptions = {
        data: data,
        id: options.id
      };
      getImageUrl(imageUrlOptions, function (err, fileurl) {
        if(err){
          return callback(err, null);
        } else {
          var downloadOptions = {
            fileUrl: fileurl,
            fileName: options.fileName
          };
          downloadFile(downloadOptions, function(e,d){
            if(e){
              return callback(e, null);
            } else {
              return callback(null, d);
            }
          });
        }
      });
    }
  });

}

module.exports = doSlurp;