import { expect } from 'chai';

import { reducer, drawCard } from '../../src/redux/actions/drawCard';
import { DRAW_CARD } from '../../src/redux/types';
import { initialState } from '../../src/redux';

describe.only('drawCard', () => {
  describe('action creator', () => {
    it('creates an action to draw a card', () => {
      expect(drawCard()).to.deep.equal({ type: DRAW_CARD });
    });
  });

  describe('reducer', () => {
    it('throws if game is not playing', () => {
      const bad = () => reducer(initialState, { type: DRAW_CARD });
      expect(bad).to.throw();
    });

    it('adds a card to the active player');

    it('removes the top card from the drawPile');
  });
});
