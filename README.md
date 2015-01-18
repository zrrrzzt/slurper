#Slurper [![Build Status](https://travis-ci.org/zrrrzzt/slurper.svg?branch=master)](https://travis-ci.org/zrrrzzt/slurper)

Node module/CLI app for downloading an image from by specifying it's id.

##Installation

```
$ npm install slurper
```

To install globally use ```-g```

```
$ npm install -g slurper
```

##Usage - module

Pass an options object.

**url** - Url for page with the image (required)

**id** - Id for the image element (required)

**fileName** - Filename for the downloaded image (required)

```
'use strict';

var slurper = require('slurper');
var options = {
  url: 'http://www.dagbladet.no/tegneserie/lunch/',
  id: '#lunch-stripe',
  fileName: 'lunch.gif'
};

slurper(options, function(error, data){
  if(error){
    console.error(error);
  } else {
    console.log(data.message);
  }
});
```

Returned data

```
{
  message: 'File downloaded'
}
```

##Usage - CLI

```
sluper <url> --id=#id-for-image --filename=filename.gif
```

Example

```
$ slurper 'http://www.dagbladet.no/tegneserie/lunch/' --id='#lunch-stripe' --filename='lunch.gif'
```

Saves the image as lunch.gif and outputs

```
File download
```

###Version

```
$ slurper -v
```

###Help

```
$ slurper -h
```