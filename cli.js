#!/usr/bin/env node
'use strict';

var slurper = require('./index');
var pkg = require('./package.json');
var query = process.argv[2];
var argv = require('minimist')(process.argv.slice(2));
var pageUrl = argv.url;
var id = argv.id;
var filename = argv.filename || 'image.gif';
var slurperOptions;

function printHelp() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('  $ slurper <url> --id=<#id-for-image> --filename=<filename>');
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
  slurperOptions = {
    url: pageUrl,
    id: id,
    fileName: filename
  };
  slurper(slurperOptions, function(error, data){
    if(error){
      console.error(error);
    } else {
      console.log(data.message);
    }
  });
} else {
  printHelp();
  return;
}