/* eslint-disable no-case-declarations */
import { PLAY_CARD } from '../types';
import { Keeper } from '../../game/cards';

export const playCard = (card, target) => ({
  type: PLAY_CARD,
  cardId: card.id,
  targetPlayerId: target && target.id
});

export const reducer = (state, action) => {
  switch (action.type) {
    case PLAY_CARD:
      const activePlayer = state.players.find(p => p.name === state.turn);
      const cardIdx = activePlayer.hand.findIndex(c => c.id === action.cardId);
      const card = activePlayer.hand[cardIdx];
      if (cardIdx === -1) throw new Error('Card not active players hand');
      const newHand = [
        activePlayer.hand.slice(0, cardIdx),
        activePlayer.hand.slice(cardIdx + 1)
      ];
      state = {
        ...state,
        players: [
          ...state.players.slice(0, activePlayer.id),
          { ...activePlayer, hand: newHand },
          ...state.players.slice(activePlayer.id + 1)
        ]
      };

      if (card instanceof Keeper) {
        const targetPlayer =
          state.players.find(p => p.id === action.targetPlayerId) ||
          activePlayer;
        const keepers = [...targetPlayer.keepers, card];
        return {
          ...state,
          players: [
            ...state.players.slice(0, targetPlayer.id),
            { ...targetPlayer, keepers },
            ...state.players.slice(targetPlayer.id + 1)
          ]
        };
      } else {
        return {
          ...state,
          discardPile: [...state.discardPile, card]
        };
      }
    default:
      return state;
  }
};
