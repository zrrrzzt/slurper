'use strict';

var assert = require('assert');
var getImageUrl = require('../lib/getImageUrl');

describe('getImageUrl - inputs', function(){

  it('requires an options object', function(done){

    var options = false;

    getImageUrl(options, function(err, data){
      assert.throws(function(){
          if(err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if((err instanceof Error) && /Missing required input: options/.test(err)){
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.data to exist', function(done){

    var options = {
      data: false,
      id: true
    };

    getImageUrl(options, function(err, data){
      assert.throws(function(){
          if(err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if((err instanceof Error) && /Missing required input: options.data/.test(err)){
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.id to exist', function(done){

    var options = {
      data: true,
      id: false
    };

    getImageUrl(options, function(err, data){
      assert.throws(function(){
          if(err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if((err instanceof Error) && /Missing required input: options.id/.test(err)){
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

});