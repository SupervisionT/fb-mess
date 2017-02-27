'use strict';

var router = require('./router.js');

module.exports = (req, res) => {
  var pathUrl = `${req.method} ${req.url}`;
  try {
    router[pathUrl](req,res);
  } catch (error) {
    res.end('Not found');
  }
};
