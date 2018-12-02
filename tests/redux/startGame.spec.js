import { expect } from 'chai';

import { reducer, startGame } from '../../src/redux/actions/startGame';
import { START_GAME, GameStateEnum } from '../../src/redux/types';
import initialState from '../../src/redux/initialState';
import { basicCards } from '../../src/game/cards';

describe('resetState', () => {
  describe('action creator', () => {
    it('creates an action to start the game', () => {
      expect(startGame(basicCards)).to.deep.equal({
        type: START_GAME,
        deck: basicCards
      });
    });
  });

  describe('reducer', () => {
    const testPlayer1 = {
      name: 'p1',
      hand: [],
      keepers: []
    };
    const testPlayer2 = { ...testPlayer1, name: 'p2', hand: [], keepers: [] };
    const players = [testPlayer1, testPlayer2];
    const startState = {
      ...initialState,
      players
    };

    it('throws an error if less than 2 player are in the game', () => {
      const bad = () => reducer(initialState, { type: START_GAME });
      expect(bad).to.throw();
    });

    it('sets the status, turn, and drawPile in state', () => {
      const endState = reducer(
        { ...startState },
        { type: START_GAME, deck: basicCards }
      );

      expect(endState).to.have.property('status', GameStateEnum.PLAYING);
      expect(endState).to.have.property('turn', startState.players[0].name);
      expect(endState.drawPile).to.deep.equal(basicCards);
    });
  });
});
