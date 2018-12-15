const session = require('express-session');

const options = {
  secret: process.env.SESSION_SECRET || 'super secure secret!',
  resave: false,
  saveUninitialized: true
};

module.exports = session(options);
