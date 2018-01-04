const request = require('request');
const config = require('../config');
const console = require('console');

// GET /oauth
exports.oauth = (event, context, callback) => {
  const code = event.queryStringParameters.code;
  const { clientId, clientSecret } = config.slack;

  if (!code) {
    console.log('Missing code query string param');
    callback(null, {
      statusCode: 500
    });
  }

  request({
    method: 'GET',
    qs: {
      code,
      client_id: clientId,
      client_secret: clientSecret
    }
  }, (err, response, body) => {
    if (err) {
      console.log('Missing code query string param');
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({ Error: 'Unable to authenticate with Slack' })
      });
    }

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  });
};
