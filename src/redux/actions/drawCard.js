/* eslint-disable no-case-declarations */
import { DRAW_CARD, GameStateEnum } from '../types';

export const drawCard = () => ({ type: DRAW_CARD });

export const reducer = (state, action) => {
  switch (action.type) {
    case DRAW_CARD:
      if (state.status !== GameStateEnum.PLAYING)
        throw new Error('drawCard can only be used during a game');
      let topCard = state.drawPile[state.drawPile.length - 1];
      let drawPile = state.drawPile.slice(1, -1);
      let activePlayer = state.players.find(p => p.name === state.turn);
      let discardPile = state.discardPile;
      let players = [
        ...state.players.slice(0, activePlayer.id),
        { ...activePlayer, hand: [...activePlayer.hand, topCard] },
        ...state.players.slice(activePlayer.id + 1)
      ];
      if (drawPile.length === 0) {
        drawPile = shuffle([...discardPile]);
        discardPile = [];
      }
      return {
        ...state,
        drawPile,
        discardPile,
        players
      };
    default:
      return state;
  }
};

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
