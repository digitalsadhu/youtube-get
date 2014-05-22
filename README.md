youtube-data-api
================

Lightweight youtube data api v3 wrapper

## Description

This module aims to provide a very light wrapper around the youtube data api
v3. It doesn't try to provide a bunch of methods for accessing different
parts of the api, instead just taking care of sending requests to the api
based on an endpoint and params and returning you the result

## Usage

```js
var youtubeDataApi = require('youtube-data-api')

var myApiKey = 'something'

var youtube = youtubeDataApi(myApiKey)

youtube('channels', {
    'part': 'id, snippet'
}, function (err, data) {
    //do something with the data
})
```