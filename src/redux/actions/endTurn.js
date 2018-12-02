import { END_TURN } from '../types';

export const endTurn = () => ({ type: END_TURN });

export const reducer = (state, action) => {
  switch (action.type) {
    case END_TURN:
      const playerIdx = state.players.findIndex(
        player => player.name === state.turn
      );
      let nextIdx;
      if (state.turnReversed) {
        nextIdx = playerIdx !== 0 ? playerIdx - 1 : state.players.length - 1;
      } else {
        nextIdx = (playerIdx + 1) % state.players.length;
      }
      return {
        ...state,
        turn: state.players[nextIdx].name
      };
    default:
      return state;
  }
};
