import { combineReducers } from 'redux';
import playerReducer from './players';
import gameStateReducer from './gameState';
import cardReducer from './cards';

const reducer = combineReducers({
  players: playerReducer,
  gameState: gameStateReducer,
  cards: cardReducer
});

export default reducer;
