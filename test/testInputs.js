'use strict';

var getFileUrl = require('../getfileurl')
  , assert = require('assert')
  ;

describe('Slurper - inputs', function(){

  it('Should throw if opts.url is not specified', function(done){

    var opts = {};

    getFileUrl(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: url/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});