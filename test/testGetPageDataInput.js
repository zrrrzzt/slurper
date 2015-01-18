'use strict';

var assert = require('assert');
var getPageData = require('../lib/getPageData');

describe('getPageData - inputs', function(){

  it('requires url to exist', function(done){

    var url = false;

    getPageData(url, function(err, data){
      assert.throws(function(){
          if(err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if((err instanceof Error) && /Missing required input: url/.test(err)){
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires url to be valid', function(done){

    var url = 'pysje';

    getPageData(url, function(err, data){
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

});