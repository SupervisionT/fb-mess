'use strict';

module.exports = {
  'GET /': (req, res) => {
    res.end('Hello, World!');
  },
  'POST /facebook': (req, res) => {
    res.end();
  },
  'GET /facebook': (req, res) => {
    res.end();
  }
};
