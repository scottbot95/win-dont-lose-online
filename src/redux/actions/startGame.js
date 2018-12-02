import { START_GAME, GameStateEnum } from '../types';

export const startGame = deck => {
  if (!Array.isArray(deck)) throw new Error('deck must be an array of cards');
  return { type: START_GAME, deck };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      if (state.players.length < 2)
        throw new Error('Cannot start game with less than two players.');
      return {
        ...state,
        drawPile: [...action.deck],
        status: GameStateEnum.PLAYING,
        turn: state.players[0].name
      };
    default:
      return state;
  }
};
