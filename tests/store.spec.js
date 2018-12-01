/* eslint-disable no-unused-expressions */
import { expect } from 'chai';

import store, {
  addPlayer,
  startGame,
  drawCard,
  playCard,
  discardCard,
  reverseTurnOrder,
  endTurn,
  endGame,
  resetState,
  GameStateEnum
} from '../src/redux/store';
import { Player } from '../src/game';
import { basicCards } from '../src/game/cards';
import basic from '../src/game/cards/basic';

const dispatch = action => store.dispatch(action);

describe.only('Redux store', () => {
  let initalState;
  before('register initial state', () => {
    initalState = store.getState();
  });

  beforeEach('reset store', () => {
    dispatch(resetState());
  });

  describe('Initial state', () => {
    it('starts with an empty player array', () => {
      expect(Array.isArray(initalState.players)).to.be.true;
      expect(initalState.players).to.have.property('length', 0);
    });
    it('starts with a game status of PENDING', () => {
      expect(initalState.status).to.equal(GameStateEnum.PENDING);
    });
  });

  describe('Dispatching', () => {
    describe('resetState', () => {
      it('resets state back to initial state', () => {
        dispatch(addPlayer(new Player('p1')));
        dispatch(addPlayer(new Player('p2')));
        dispatch(startGame(basicCards));

        dispatch(resetState());
        expect(store.getState()).to.deep.equal(initalState);
      });
    });

    describe('addPlayer', () => {
      it('only accepts instances of `Player`', () => {
        const bad = () => dispatch(addPlayer('banana'));
        expect(bad).to.throw();
      });

      it('adds the given player to state', () => {
        const playerNames = ['p1', 'p2', 'p3', 'p4'];
        const players = playerNames.map(p => new Player(p));
        players.forEach(player => dispatch(addPlayer(player)));
        expect(store.getState().players).to.deep.equal(players);
      });
    });

    describe('startGame', () => {
      it('only works if there are at least 2 players', () => {
        const bad = () => dispatch(startGame(basicCards));
        expect(bad).to.throw();
      });

      it('properly sets the `status` and `turn`', () => {
        dispatch(addPlayer(new Player('p1')));
        dispatch(addPlayer(new Player('p2')));
        dispatch(startGame(basicCards));
        const { status, turn } = store.getState();
        expect(status).to.equal(GameStateEnum.PLAYING);
        expect(turn).to.equal('p1');
      });

      it('properly sets the `drawPile` to the cards given');
    });

    describe('reverseTurnOrder', () => {
      it('toggles the `turnReversed` field on store', () => {
        const start = store.getState().turnReversed;
        dispatch(reverseTurnOrder());
        expect(store.getState().turnReversed).to.equal(!start);
        dispatch(reverseTurnOrder());
        expect(store.getState().turnReversed).to.equal(start);
      });
    });

    describe('Playing actions', () => {
      let players;

      beforeEach('setup game state', () => {
        const playerNames = ['p1', 'p2', 'p3', 'p4'];
        players = playerNames.map(p => new Player(p));
        players.forEach(p => dispatch(addPlayer(p)));
      });

      const ensurePlaying = action => {
        const dispatchBeforePlaying = () => dispatch(action);
        expect(dispatchBeforePlaying).to.throw();
        dispatch(startGame(basicCards));
        dispatch(action);
      };

      xdescribe('drawCard', () => {
        it('only works while game is playing', () => {
          ensurePlaying(drawCard());
        });

        it('adds a card to the active players hand', () => {
          const state = store.getState();
          const drawPile = state.drawPile;
          const activePlayer = state.players.find(p => p.name === state.turn);
          const topCard = drawPile[drawPile.length - 1];
          dispatch(drawCard());
          expect(activePlayer.hand).to.contain(topCard);
        });

        it('removes the top card from the `drawPile`');
        it(
          'shuffles the `discardPile` and set it as the `drawPile` when `drawPile` runs out'
        );
      });

      describe('playCard', () => {
        it('only works while game is playing');
        it("removes the card from the active player's hand");
        it("adds the card to the `discardPile` if it's a normal card");
        it("adds the card to the `target` player's hand if it's a keeper");
        it("defaults 'target' to the active player");
      });

      describe('discardCard', () => {
        it('only works while game is playing');
        it("removes the specified card from the active player's hand");
        it('add the removed card to the `discardPile`');
      });

      describe('endTurn', () => {
        it('only works while game is playing');
        it("sets turn to the next player's name");
        it('works correctly if `turnReversed` is set');
      });

      describe('endGame', () => {
        it('only works while game is playing', () => {
          ensurePlaying(endGame());
        });
        it('sets the game status to "postgame"');
      });
    });
  });
});
