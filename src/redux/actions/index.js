import { addPlayer, reducer as addPlayerReducer } from './addPlayer';
import { discardCard, reducer as discardCardReducer } from './discardCard';
import { drawCard, reducer as drawCardReducer } from './drawCard';
import { endGame, reducer as endGameReducer } from './endGame';
import { endTurn, reducer as endTurnReducer } from './endTurn';
import { playCard, reducer as playCardReducer } from './playCard';
import { resetState, reducer as resetReducer } from './reset';
import {
  reverseTurnOrder,
  reducer as reverseTurnOrderReducer
} from './reverseTurnOrder';
import { startGame, reducer as startGameReducer } from './startGame';

export {
  addPlayer,
  discardCard,
  drawCard,
  endGame,
  endTurn,
  playCard,
  resetState,
  reverseTurnOrder,
  startGame
};
export const reducers = [
  addPlayerReducer,
  discardCardReducer,
  drawCardReducer,
  endGameReducer,
  endTurnReducer,
  playCardReducer,
  resetReducer,
  reverseTurnOrderReducer,
  startGameReducer
];
