import { GameStateEnum } from './types';

const initialState = {
  players: [],
  drawPile: [],
  discardPile: [],
  status: GameStateEnum.PENDING,
  turn: GameStateEnum.PENDING,
  turnReversed: false
};

export default initialState;
