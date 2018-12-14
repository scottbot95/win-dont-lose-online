import { combineReducers } from 'redux';
import playerReducer from './players';

const reducer = combineReducers({
  players: playerReducer
});

export default reducer;
