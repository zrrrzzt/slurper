'use strict';

var getFileUrl = require('../getfileurl');
var assert = require('assert');

describe('Slurper - inputs', function(){

  it('Should throw if opts.url is not specified', function(done){

    var opts = {};

    getFileUrl(opts, function(err, data){
      assert.throws(function(){
          if(err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if((err instanceof Error) && /Missing required param: url/.test(err)){
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('Should throw if opts.url is not a valid url', function(done){

    var opts = {
      url:'pysje',
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
          if((err instanceof Error) && /Invalid url/.test(err)){
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('Should throw if opts.id is not specified', function(done){

    var opts = {
      url:'http://www.google.com'
    };

    getFileUrl(opts, function(err, data){
      assert.throws(function(){
          if(err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if((err instanceof Error) && /Missing required param: id/.test(err)){
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

});