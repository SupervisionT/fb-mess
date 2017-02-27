'use strict';

var utils = require('./utils.js');

module.exports = {
  'GET /': (req, res) => {
    res.end('Hello, World!');
  },
  'GET /facebook': (req, res) => {
    var challenge = utils.parseUrl(req.url);
    res.end(challenge['hub.challenge']);
  }
};
