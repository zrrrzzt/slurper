'use strict';

var getFileUrl = require('../getfileurl');
var assert = require('assert');

describe('Slurper - outputs', function(){

  it('Should throw if file url is not found', function(done){

    var opts = {
      url:'https://www.npmjs.org',
      id:'#megaman'
    };

    getFileUrl(opts, function(err, data){
      assert.throws(function(){
          if(err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if((err instanceof Error) && /File url not found/.test(err)){
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('Should return a file url', function(done){

    var opts = {
      url:'http://www.dagbladet.no/tegneserie/lunch/',
      id:'#lunch-stripe'
    };

    getFileUrl(opts, function(err, data){
      if(err){
        throw err;
      }
      assert(data);
      done();
    });

  });

});