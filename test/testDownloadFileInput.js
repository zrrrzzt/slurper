'use strict';

var assert = require('assert');
var downloadFile = require('../lib/downloadFile');

describe('downloadFile - inputs', function(){

  it('requires an options object', function(done){

    var options = false;

    downloadFile(options, function(err, data){
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

  it('requires options.fileUrl to exist', function(done){

    var options = {
      fileUrl: false,
      fileName: true
    };

    downloadFile(options, function(err, data){
      assert.throws(function(){
          if(err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if((err instanceof Error) && /Missing required input: options.fileUrl/.test(err)){
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.fileName to exist', function(done){

    var options = {
      fileUrl: true,
      fileName: false
    };

    downloadFile(options, function(err, data){
      assert.throws(function(){
          if(err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if((err instanceof Error) && /Missing required input: options.fileName/.test(err)){
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

});