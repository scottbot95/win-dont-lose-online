import { expect } from 'chai';

import { reducer, addPlayer } from '../../src/redux/actions/addPlayer';
import { Player } from '../../src/game';
import { ADD_PLAYER } from '../../src/redux/types';
import initialState from '../../src/redux/initialState';

describe('addPlayer', () => {
  describe('action creator', () => {
    it('only accepts instances of `Player`', () => {
      const bad = () => addPlayer('banana');
      expect(bad).to.throw();
    });

    it('creates an action to add a player', () => {
      const player = new Player('Player 1');
      const expectedAction = {
        type: ADD_PLAYER,
        player
      };

      expect(addPlayer(player)).to.deep.equal(expectedAction);
    });
  });

  describe('reducer', () => {
    it('only handles its own action type', () => {
      expect(reducer(initialState, {})).to.equal(initialState);
    });

    it('adds a player to the list', () => {
      const player = new Player('Player 1');
      expect(
        reducer({ players: [] }, { type: ADD_PLAYER, player })
      ).to.deep.equal({ players: [player] });

      const player2 = new Player('Player 2');
      expect(
        reducer({ players: [player] }, { type: ADD_PLAYER, player: player2 })
      ).to.deep.equal({ players: [player, player2] });
    });
  });
});
