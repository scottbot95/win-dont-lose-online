const app = require('./app');

const PORT = process.env.PORT || 1337;

// have database maybe?

const server = app.listen(PORT, err => {
  if (err) {
    console.error('Failed to start server');
    console.error(err);
    process.exit(1);
  }
  console.log(`Serving sockets serendipitously on port ${PORT}`);
});

const io = require('socket.io')(server);
require('./socket')(io);
