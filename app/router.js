'use strict';

var utils = require('./utils.js');
var env = require('../env.json');

module.exports = {
  'GET /': (req, res) => {
    res.end('Hello, World!');
  },
  'GET /facebook': (req, res) => {
    var challenge = utils.parseUrl(req.url);
    res.end(challenge['hub.challenge']);
  },
  'POST /facebook': (req, res) => {
    utils.parseBody(req, (err,payload) => {
      if(err) {
        console.log('err',err);
        return res.end('Error');
      }
      console.log('payload',payload);
      res.end();
    });
  }
};
