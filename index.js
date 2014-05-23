#!/usr/bin/env node
'use strict';

var slurper = require('./slurper')
  , pkg = require('./package.json')
  , query = process.argv[2]
  , argv = require('minimist')(process.argv.slice(2))
  , pageUrl = argv.url
  , id = argv.id
  , filename = argv.filename || 'image.gif'
  ;

function printHelp() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('  $ slurper <url> --id=#id-for-image --filename=filename.gif');
}

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

if (query.indexOf('http') !== -1) {
  pageUrl = argv._[0];
}

if(pageUrl && id && filename){
  slurper(pageUrl, id, filename);
} else {
  printHelp();
  return;
}