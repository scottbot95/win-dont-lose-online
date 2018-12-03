/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import { reducer, playCard } from '../../src/redux/actions/playCard';
import { PLAY_CARD } from '../../src/redux/types';
import { initialState } from '../../src/redux';
import { basicCards } from '../../src/game/cards';

describe('playCard', () => {
  describe('action creator', () => {
    it('creates an action to play a card on a player', () => {
      const expectedAction = {
        type: PLAY_CARD,
        cardId: 0,
        targetPlayerId: 0
      };
      expect(playCard(basicCards[0], { id: 0 })).to.deep.equal(expectedAction);
    });

    it('creates an action even when no target is given', () => {
      const expectedAction = {
        type: PLAY_CARD,
        cardId: 0,
        targetPlayerId: undefined
      };
      expect(playCard(basicCards[0])).to.deep.equal(expectedAction);
    });
  });

  describe('reducer', () => {
    let stateBefore;
    let normalCard;
    let keeperCard;

    beforeEach('setup state', () => {
      stateBefore = {
        ...initialState,
        players: [
          { name: 'p1', id: 0, hand: basicCards.slice(0, 3), keepers: [] },
          { name: 'p2', id: 1, hand: basicCards.slice(3, 6), keepers: [] }
        ],
        turn: 'p2'
      };
      normalCard = basicCards[3];
      keeperCard = basicCards[4];
      deepFreeze(stateBefore);
    });

    it("removes the played card from the player's hand", () => {
      const stateAfterNormal = reducer(
        stateBefore,
        playCard(normalCard, stateBefore.players[1])
      );
      const stateAfterKeeper = reducer(stateBefore, playCard(keeperCard));
      expect(stateAfterNormal.players[1].hand).to.not.contain(normalCard);
      expect(stateAfterKeeper.players[1].hand).to.not.contain(keeperCard);
    });

    it("adds the card to the discard if it isn't a keeper", () => {
      const stateAfter = reducer(
        stateBefore,
        playCard(normalCard, stateBefore.players[1])
      );

      expect(stateAfter.discardPile).to.contain(normalCard);
    });

    it("adds the card to the target's keepers if it is a keeper", () => {
      const playedOne = reducer(
        stateBefore,
        playCard(keeperCard, stateBefore.players[0])
      );

      const playedTwo = reducer(
        stateBefore,
        playCard(keeperCard, stateBefore.players[1])
      );

      expect(playedOne.players[0].keepers).to.contain(keeperCard);
      expect(playedTwo.players[1].keepers).to.contain(keeperCard);
    });

    it('will play the keeper on the active player if no target is given', () => {
      const stateAfter = reducer(stateBefore, playCard(keeperCard));

      expect(stateAfter.players[1].keepers).to.contain(keeperCard);
    });
  });
});
