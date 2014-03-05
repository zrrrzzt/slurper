#!/usr/bin/env node

var slurper = require('./slurper')
  , argv = require('minimist')(process.argv.slice(2))
  , pageUrl = argv.url
  , id = argv.id
  , filename = argv.filename || 'image.gif';

if(pageUrl && id && filename){
  slurper(pageUrl, id, filename);
} else {
  console.log('Missing required params.');
  console.log('Usage:');
  console.log('slurper --url=http://url.to.page.com --id=#id-to-image --filename=filename.gif');
}