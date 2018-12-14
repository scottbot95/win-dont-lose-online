const path = require('path');
const express = require('express');
const volleyball = require('volleyball');

const app = express();

// logging
app.use(volleyball);

if (process.env.NODE_ENV.toLocaleLowerCase() === 'production') {
  console.log('STARTING IN PRODUCTION MODE');
} else {
  console.log('STARTING IN DEVELOPMENT MODE');
}

// session middleware
app.use(require('./session'));

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// body-parsers
app.use(express.json());
app.use(express.urlencoded());

module.exports = app;
