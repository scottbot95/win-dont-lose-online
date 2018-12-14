import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import {
  reducer,
  addPlayer,
  PlayerStatus
} from '../../src/redux/actions/addPlayer';
import { ADD_PLAYER, RESET } from '../../src/redux/constants';
import initialState from '../../src/redux/initialState';

describe('addPlayer', () => {
  describe('action creator', () => {
    it('creates an action to add a player', () => {
      const name = 'Player 1';
      const expectedAction = {
        type: ADD_PLAYER,
        name
      };

      expect(addPlayer(name)).to.deep.equal(expectedAction);
    });
  });

  describe('reducer', () => {
    beforeEach('reset id counter', () => {
      reducer({}, { type: RESET });
    });

    it('only handles its own action type', () => {
      expect(reducer(initialState, {})).to.equal(initialState);
    });

    it('adds a player to the list', () => {
      const name = 'Player 1';
      const p1 = {
        name,
        hand: [],
        keepers: [],
        status: PlayerStatus.PLAYING,
        id: 0
      };
      expect(reducer(initialState, { type: ADD_PLAYER, name })).to.deep.equal({
        ...initialState,
        players: [p1]
      });

      const stateBefore = deepFreeze({ ...initialState, players: [p1] });
      const name2 = 'Player 2';
      const p2 = {
        name: name2,
        hand: [],
        keepers: [],
        status: PlayerStatus.PLAYING,
        id: 1
      };
      expect(
        reducer(stateBefore, { type: ADD_PLAYER, name: name2 })
      ).to.deep.equal({ ...initialState, players: [p1, p2] });
    });

    it('disallows duplicate player names', () => {
      const name = 'Player 1';
      const p1 = {
        name,
        hand: [],
        keepers: [],
        status: PlayerStatus.PLAYING,
        id: 0
      };
      const stateBefore = deepFreeze({ ...initialState, players: [p1] });

      const bad = () => reducer(stateBefore, { type: ADD_PLAYER, name });
      expect(bad).to.throw();
    });
  });
});
