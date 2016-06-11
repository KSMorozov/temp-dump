/*
  eslint
    consistent-return:0
    no-console:0
*/

const express = require('express');
const mongoose = require('mongoose');
const logger = require('./logger');
const ngrok = require('ngrok');
const bodyParser = require('body-parser');

const frontend = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';

const api = require('./routes/api');

const app = express();

// Connect to Database.
mongoose.connect(
  'mongodb://l1i3g3a7z2v0e1z6d:l0T6eX9u2G4s@ds011271.mlab.com:11271/liga-zvezd',
  (err) => { if (err) console.error(err); else console.log('successfully connected to database'); }
);

// Parse Requests body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
app.use('/api', api);

// Initialize frontend middleware that will serve your JS app
const webpackConfig = isDev
  ? require('../internals/webpack/webpack.dev.babel')
  : require('../internals/webpack/webpack.prod.babel');

app.use(frontend(webpackConfig));

const port = process.env.PORT || 3000;

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err);
  }

  // Connect to ngrok in dev mode
  if (isDev) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
});
