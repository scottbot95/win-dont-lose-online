import { GameStateEnum } from './constants';

import deepFreeze from 'deep-freeze';

const initialState = {
  players: [],
  drawPile: [],
  discardPile: [],
  status: GameStateEnum.PENDING,
  turn: GameStateEnum.PENDING,
  turnReversed: false
};

export default deepFreeze(initialState);
