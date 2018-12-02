export const ADD_PLAYER = 'ADD_PLAYER';
export const START_GAME = 'START_GAME';
export const DRAW_CARD = 'DRAW_CARD';
export const PLAY_CARD = 'PLAY_CARD';
export const DISCARD_CARD = 'DISCARD_CARD';
export const REVERSE_TURN_ORDER = 'REVERSE_TURN_ORDER';
export const END_TURN = 'END_TURN';
export const END_GAME = 'END_GAME';
export const RESET = 'RESET';

export const GameStateEnum = {
  PENDING: 'PENDING',
  PLAYING: 'PLAYING',
  POSTGAME: 'POSTGAME'
};
Object.freeze(GameStateEnum);
