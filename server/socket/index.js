const io = require('./io');
const game = require('../game');
const sessionMiddleware = require('../session');

io.use((socket, next) => {
  sessionMiddleware(socket.request, socket.request.res, next);
});

io.on('connection', socket => {
  game.addEmitter(socket);
  socket.request.session.socketId = socket.id;
  socket.on('disconnect', () => {
    game.removeEmitter(socket);
  });
});
