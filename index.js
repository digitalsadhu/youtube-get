'use strict';

var request     = require('nets')
  , queryString = require('querystring')

var constructYoutubeApiUrl = function (key, endpoint, params) {
  var baseUrl = ['https://www.googleapis.com/youtube/v3', endpoint]
  if (key)
    params.key = key
  return [baseUrl.join('/'), queryString.stringify(params)].join('?')
}

module.exports = function (youtubeApiKey) {
  return function (endpoint, params, cb) {
    request({
      url: constructYoutubeApiUrl(youtubeApiKey, endpoint, params),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        cb(null, JSON.parse(body));
      } else {
        cb(error)
      }
    });
  }
}