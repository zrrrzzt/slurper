#Slurper [![Build Status](https://travis-ci.org/zrrrzzt/slurper.svg?branch=master)](https://travis-ci.org/zrrrzzt/slurper)

Node CLI app for downloading an image from by specifying it's id.

##Usage

You'll need Node.js and npm.

###Installation
To install globally use ```-g```

```
$ npm install -g slurper
```

###Build

```
$ git clone https://github.com/zrrrzzt/slurper.git

$ cd slurper

$ npm install
```

###Test

Make sure you hav Mocha installed.

```
$ npm test
```

###Version

```
$ slurper -v
```

###Help

```
$ slurper -h
```

###Download an image with slurper

```
sluper <url> --id=#id-for-image --filename=filename.gif
```