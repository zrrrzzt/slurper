var fs = require('fs')
  , request = require('request')
  , cheerio = require('cheerio');

module.exports = function(pageUrl, imgId, fileName){

  function saveFile(fileUrl, fileName) {
    request(fileUrl).pipe(fs.createWriteStream(fileName));
  }

  function parseForFileUrl(body, fileId){
    var $ = cheerio.load(body);
    return $(fileId).attr('src');
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
    }

    var fileUrl = parseForFileUrl(body, imgId);

    if(fileUrl){
      saveFile(fileUrl, fileName);
    } else {
      console.log('Error: ' + fileUrl);
    }

  });

}