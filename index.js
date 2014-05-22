'use strict';

var request  = require('superagent')
  , queryString = require('querystring')

var constructYoutubeApiUrl = function (key, endpoint, params) {
  var baseUrl = ['https://www.googleapis.com/youtube/v3', endpoint]
  params.key = key
  return [baseUrl.join('/'), queryString.stringify(params)].join('?')
}

module.exports = function (YOUTUBE_API_KEY) {
  return function (endpoint, params, cb) {
    request
      .get(constructYoutubeApiUrl(YOUTUBE_API_KEY, endpoint, params))
      .type('application/json')
      .accept('application/json')
      .end(function (err, res) {
        cb(err, res.body)
      })
  }
}