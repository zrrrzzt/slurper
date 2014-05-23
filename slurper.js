'use strict';

var getFileUrl = require('./getfileurl')
  , request = require('request')
  ;

function saveFile(fileUrl, fileName) {
  request(fileUrl).pipe(fs.createWriteStream(fileName));
}

module.exports = function doSlurp(pageUrl, fileId, fileName){

  var opts = {
        url:pageUrl,
        id:fileId
      }
    ;

  getFileUrl(opts, function(err,fileUrl){
    if(err){
      console.error(err);
    } else {
      saveFile(fileUrl, fileName);
    }

  });

};