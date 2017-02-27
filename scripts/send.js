'use strict';

require('dotenv').config();
var https = require('https');
var utils = require('../app/utils.js');

console.log('process.env',process.env);

var postData = JSON.stringify({
  recipient:{id:process.env.FACEBOOK_USER_ID},
  message:{text:"hello, world!"}
});

var opts = {
  hostname: 'graph.facebook.com',
  port: 443,
  path: `/v2.6/me/messages?access_token=${process.env.FACEBOOK_PAGE_ACCESS_TOKEN}`,
  method: 'POST',
  headers: {'Content-Type': 'application/json'}
};

var req = https.request(opts, (res) => {
  utils.parseBody(res, (err, body) => {
    if(err) {
      console.log('err',err);
      return res.end();
    }

    console.log('body',body);
  });
});

req.write(postData);
req.end();
