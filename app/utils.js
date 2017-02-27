'use strict';

var qs = require('querystring');

module.exports = {
  parseUrl: (url) => {
    return qs.parse(url);
  }
};