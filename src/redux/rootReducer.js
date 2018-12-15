import { combineReducers } from 'redux';
import playerReducer from './players';
import gameStateReducer from './gameState';

const reducer = combineReducers({
  players: playerReducer,
  gameState: gameStateReducer
});

export default reducer;
