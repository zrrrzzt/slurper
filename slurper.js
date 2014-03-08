var fs = require('fs')
  , request = require('request')
  , cheerio = require('cheerio');

module.exports = function(pageUrl, fileId, fileName){

  function saveFile(fileUrl, fileName) {
    request(fileUrl).pipe(fs.createWriteStream(fileName));
  }

  function parseForFileUrl(body, fileId, callback){

    var $ = cheerio.load(body)
      , fileUrl = $(fileId).attr('src');

    if(!fileUrl){
      return callback(new Error('No fileUrl found'), null);
    } else {
      return callback(null, fileUrl);
    }

  }

  function getPageBody(url, callback){
    request(url, function (error, response, body) {
      if(error){
        return callback(error, null);
      }

      if (!error && response.statusCode == 200) {
        return callback(null, body.toString());
      }
    })
  }

  getPageBody(pageUrl, function(err, body){
    if(err) {
      console.log(err);
    } else {
      parseForFileUrl(body, fileId, function(err, fileUrl){
        if(err){
          console.log(err);
        } else {
          saveFile(fileUrl, fileName);
        }
      })
    }

  });

}