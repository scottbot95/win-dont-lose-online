/* eslint-disable no-case-declarations */
import { ADD_PLAYER, RESET } from '../types';

export const PlayerStatus = { PLAYING: 'PLAYING', WON: 'WON', LOST: 'LOST' };

export const addPlayer = name => {
  return {
    type: ADD_PLAYER,
    name
  };
};

let nextId = 0;

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      if (state.players.find(p => p.name === action.name))
        throw new Error('Cannot have duplicate player names');
      const player = {
        name: action.name,
        hand: [],
        keepers: [],
        status: PlayerStatus.PLAYING,
        id: nextId++
      };
      return { ...state, players: [...state.players, player] };
    case RESET:
      nextId = 0;
      return state;
    default:
      return state;
  }
};
