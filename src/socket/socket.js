import io from 'socket.io-client';

const socket = io();

// const oldEmit = socket.emit.bind(socket);
// socket.emit = function(event, ...args) {
//   oldEmit(event, socket.id, ...args);
// };

export default socket;
