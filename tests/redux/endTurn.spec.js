import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import { reducer, endTurn } from '../../src/redux/actions/endTurn';
import { END_TURN } from '../../src/redux/types';
import { initialState } from '../../src/redux';

describe('endTurn', () => {
  const action = { type: END_TURN };

  describe('action creator', () => {
    it('creates an action to end turn', () => {
      expect(endTurn()).to.deep.equal(action);
    });
  });

  describe('reducer', () => {
    describe('counter-clockwise play', () => {
      const startState = {
        ...initialState,
        players: [{ name: 'p1' }, { name: 'p2' }, { name: 'p3' }],
        turn: 'p1'
      };
      const stateP2Turn = { ...startState, turn: 'p2' };
      const stateP3Turn = { ...startState, turn: 'p3' };

      deepFreeze(startState);
      deepFreeze(stateP2Turn);
      deepFreeze(stateP3Turn);

      it('moves the active player correctly', () => {
        expect(reducer(startState, action)).to.deep.equal(stateP2Turn);
        expect(reducer(stateP2Turn, action)).to.deep.equal(stateP3Turn);
      });

      it('properly wraps to first play at the end', () => {
        expect(reducer(stateP3Turn, action)).to.deep.equal(startState);
      });
    });

    describe('clockwise play', () => {
      const startState = {
        ...initialState,
        players: [{ name: 'p1' }, { name: 'p2' }, { name: 'p3' }],
        turn: 'p1',
        turnReversed: true
      };
      const stateP2Turn = { ...startState, turn: 'p2' };
      const stateP3Turn = { ...startState, turn: 'p3' };

      deepFreeze(startState);
      deepFreeze(stateP2Turn);
      deepFreeze(stateP3Turn);

      it('moves the active player correctly', () => {
        expect(reducer(startState, action)).to.deep.equal(stateP3Turn);
        expect(reducer(stateP3Turn, action)).to.deep.equal(stateP2Turn);
      });

      it('properly wraps to first play at the end', () => {
        expect(reducer(stateP2Turn, action)).to.deep.equal(startState);
      });
    });
  });
});
