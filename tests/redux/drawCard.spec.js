import { expect } from 'chai';

import { reducer, drawCard } from '../../src/redux/actions/drawCard';
import { DRAW_CARD, GameStateEnum } from '../../src/redux/types';
import { initialState } from '../../src/redux';
import { basicCards } from '../../src/game/cards';
import { PlayerStatus } from '../../src/redux/actions/addPlayer';

const drawAction = { type: DRAW_CARD };
describe.only('drawCard', () => {
  describe('action creator', () => {
    it('creates an action to draw a card', () => {
      expect(drawCard()).to.deep.equal(drawAction);
    });
  });

  describe('reducer', () => {
    const testPlayer1 = {
      name: 'p1',
      hand: [],
      keepers: [],
      status: PlayerStatus.PLAYING
    };
    const testPlayer2 = { ...testPlayer1, name: 'p2', hand: [], keepers: [] };
    const players = [testPlayer1, testPlayer2];
    let fullDeck = {
      ...initialState,
      players,
      drawPile: basicCards,
      turn: 'p1',
      status: GameStateEnum.PLAYING
    };

    let lowDeck = {
      ...fullDeck,
      drawPile: [basicCards[0]],
      discardPile: basicCards.slice(1)
    };

    it('throws if game is not playing', () => {
      const bad = () => reducer(initialState, drawAction);
      expect(bad).to.throw();
    });

    it('adds a card to the active player', () => {
      const state = reducer(fullDeck, drawAction);
      expect(state.players[0].hand).to.contain(
        basicCards[basicCards.length - 1]
      );
    });

    it('removes the top card from the drawPile', () => {
      const state = reducer(fullDeck, drawAction);
      expect(state.drawPile).to.not.contain(basicCards[basicCards.length - 1]);
    });

    xit('shuffles the `discardPile` and moves it to `drawPile` when out of cards', () => {
      const state = reducer(lowDeck, drawAction);
      expect(state.drawPile).to.have.property('length', basicCards.length);
      expect(state.discardPile).to.have.property('length', 0);
      // TODO test for shuffling
    });
  });
});
