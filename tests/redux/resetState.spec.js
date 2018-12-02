import { expect } from 'chai';

import { reducer, resetState } from '../../src/redux/actions/reset';
import { RESET, GameStateEnum } from '../../src/redux/types';
import initialState from '../../src/redux/initialState';
import { Player } from '../../src/game';

describe('resetState', () => {
  describe('action creator', () => {
    it('creates an action to reset the store state', () => {
      expect(resetState()).to.deep.equal({ type: RESET });
    });
  });

  describe('reducer', () => {
    const startState = {
      players: [new Player('p1'), new Player('p2')],
      status: GameStateEnum.PLAYING
    };

    it('resets state back to initial', () => {
      expect(reducer(startState, { type: RESET })).to.deep.equal(initialState);
    });
  });
});
