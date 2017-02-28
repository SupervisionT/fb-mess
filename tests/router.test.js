'use strict';

var test = require('tape');
var shot = require('shot');
var main = require('../app/main.js');

test('GET /notFound => should return simple "Not found" mess', t => {
  shot.inject(main,{
    method: 'GET',
    url: '/notFound'
  }, res => {
    t.equal(res.payload,'Not found','right mess');
    t.end();
  });
});

test('GET / => should return simple string', t => {
  shot.inject(main,{
    method: 'GET',
    url: '/'
  }, res => {
    t.equal(res.payload,'Hello, World!','right mess');
    t.end();
  });
});

test('GET /facebook => fb webhook should return challenge', t => {
  shot.inject(main,{
    method: 'GET',
    url: [
      '/facebook?',
      'hub.mode=subscribe',
      '&hub.challenge=1753237040',
      '&hub.verify_token=all_good_no_matter_what_happen'
    ].join('')
  }, res => {
    t.equal(res.payload,'1753237040','right challenge response');
    t.end();
  });
});

test('POST /facebook => fb webhook receive real message', t => {
  shot.inject(main,{
    method: 'POST',
    url: '/facebook',
    payload: {

    }
  },res => {
    t.end();
  });
});
