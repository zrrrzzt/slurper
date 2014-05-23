'use strict';

var getFileUrl = require('../getfileurl')
  , assert = require('assert')
  ;

describe('Slurper - outputs', function(){

  it('Should throw if file url is not found', function(done){

    var opts = {url:'http://www.google.com', id:'#megaman'};

    getFileUrl(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /File url not found/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});