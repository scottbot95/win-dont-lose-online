/* eslint-disable no-unused-expressions */
import { expect } from 'chai';

import { store } from '../src/redux';
import {
  addPlayer,
  startGame,
  drawCard,
  playCard,
  discardCard,
  endTurn,
  endGame,
  resetState
} from '../src/redux/actions';
import { Player } from '../src/game';
import { basicCards } from '../src/game/cards';

const dispatch = action => store.dispatch(action);

describe('Redux store', () => {
  beforeEach('reset store', () => {
    dispatch(resetState());
  });

  describe('Dispatching', () => {
    describe('Playing actions', () => {
      beforeEach('setup game state', () => {
        const playerNames = ['p1', 'p2', 'p3', 'p4'];
        playerNames.forEach(p => dispatch(addPlayer(p)));
        dispatch(startGame(basicCards));
      });

      describe('playCard', () => {
        it("removes the card from the active player's hand");
        it("adds the card to the `discardPile` if it's a normal card");
        it("adds the card to the `target` player's hand if it's a keeper");
        it("defaults 'target' to the active player");
      });

      describe('discardCard', () => {
        it("removes the specified card from the active player's hand");
        it('add the removed card to the `discardPile`');
      });

      describe('endTurn', () => {
        it("sets turn to the next player's name");
        it('works correctly if `turnReversed` is set');
      });

      describe('endGame', () => {
        it('sets the game status to "postgame"');
      });
    });
  });
});
