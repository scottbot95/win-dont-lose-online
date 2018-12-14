import { END_GAME, GameStateEnum } from '../constants';

export const endGame = () => ({ type: END_GAME });

export const reducer = (state, action) => {
  switch (action.type) {
    case END_GAME:
      if (state.status !== GameStateEnum.PLAYING)
        throw new Error('status must be playing to end game');
      return { ...state, status: GameStateEnum.POSTGAME };
    default:
      return state;
  }
};
