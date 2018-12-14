const session = require('express-session');

const options = {
  secret: process.env.SESSION_SECRET || 'super secure secret!',
  resave: false,
  saveUninitialized: false
};

module.exports = session(options);
