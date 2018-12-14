import { expect } from 'chai';

import { reducer, resetState } from '../../src/redux/actions/reset';
import { RESET, GameStateEnum } from '../../src/redux/constants';
import initialState from '../../src/redux/initialState';

describe('resetState', () => {
  describe('action creator', () => {
    it('creates an action to reset the store state', () => {
      expect(resetState()).to.deep.equal({ type: RESET });
    });
  });

  describe('reducer', () => {
    const testPlayer = {
      name: 'p1',
      hand: [],
      keepers: []
    };
    const startState = {
      ...initialState,
      players: [testPlayer],
      status: GameStateEnum.PLAYING
    };

    it('resets state back to initial', () => {
      expect(reducer(startState, { type: RESET })).to.deep.equal(initialState);
    });
  });
});
