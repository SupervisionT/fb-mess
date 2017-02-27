'use strict';

var test = require('tape');
var shot = require('shot');
var utils = require('../app/utils.js');

test('utils.parse => should parse query strings', t => {
  var url = 'a.b=one&a.c=1&a.v=2';
  var res = utils.parseUrl(url);
  t.deepEqual(res,{
    'a.b':'one',
    'a.c':'1',
    'a.v':'2'
  },'got almost right object');
  t.end();
});