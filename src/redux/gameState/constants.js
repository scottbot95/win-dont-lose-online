export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const SET_ACTIVE_PLAYER = 'SET_ACTIVE_PLAYER';
export const REVERSE_TURN_ORDER = 'REVERSE_TURN_ORDER';

export const GameStateEnum = {
  PENDING: 'PENDING',
  PLAYING: 'PLAYING',
  POSTGAME: 'POSTGAME'
};
Object.freeze(GameStateEnum);
