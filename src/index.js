import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import './simpleAI';
import socket from './socket';

socket.emit('newPlayer', 'player1', player => console.log(player));

ReactDOM.render(<App />, document.getElementById('app'));
