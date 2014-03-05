var fs = require('fs')
  , request = require('request')
  , cheerio = require('cheerio');

module.exports = function(pageUrl, imgId, fileName){

  function saveImage(imageUrl, fileName) {
    request(imageUrl).pipe(fs.createWriteStream(fileName));
  }

  function parseForImageUrl(body, imgId){
    var $ = cheerio.load(body);
    return $(imgId).attr('src');
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
      throw err;
    }

    var imgUrl = parseForImageUrl(body, imgId);

    if(imgUrl){
      saveImage(imgUrl, fileName);
    } else {
      console.log('Error: ' + imgUrl);
    }

  });

}