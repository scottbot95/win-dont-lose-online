import { END_TURN } from '../types';

export const endTurn = () => ({ type: END_TURN });

export const reducer = (state, action) => {
  switch (action.type) {
    case END_TURN:
      const player = state.players.find(p => p.name === state.turn);
      let nextIdx;
      if (state.turnReversed) {
        nextIdx = player.id !== 0 ? player.id - 1 : state.players.length - 1;
      } else {
        nextIdx = (player.id + 1) % state.players.length;
      }
      console.log(player, nextIdx);
      return {
        ...state,
        turn: state.players[nextIdx].name
      };
    default:
      return state;
  }
};
