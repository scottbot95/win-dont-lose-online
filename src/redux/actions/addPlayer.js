/* eslint-disable no-case-declarations */
import { ADD_PLAYER } from '../types';

export const PlayerStatus = { PLAYING: 0, WON: 1, LOST: 2 };

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
      const player = {
        name: action.name,
        hand: [],
        keepers: [],
        status: PlayerStatus.PLAYING,
        id: nextId++
      };
      return { ...state, players: [...state.players, player] };
    default:
      return state;
  }
};
