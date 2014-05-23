#!/usr/bin/env node
'use strict';

var slurper = require('./slurper')
  , argv = require('minimist')(process.argv.slice(2))
  , pageUrl = argv.url
  , id = argv.id
  , filename = argv.filename
  , version = argv.version;

if (version){
  var pkg = require('./package.json');
  console.log(pkg.version);
  return;
}

if(pageUrl && id && filename){
  slurper(pageUrl, id, filename);
} else {
  console.log('Missing required params.');
  console.log('Usage:');
  console.log('slurper --url=http://url.to.page.com --id=#id-to-image --filename=filename.gif');
}