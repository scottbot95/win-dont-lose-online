/* eslint-disable no-case-declarations */
import initialState from './initialState';
import {
  ADD_PLAYER,
  PlayerStatus,
  ADD_CARD_TO_HAND,
  ADD_KEEPER
} from './constants';
import { RESET } from '../constants';
import { findIndexById, findPlayerById } from './actions';

let nextId = 0;

const reducer = (state = initialState, action) => {
  let player;
  let playerIdx;
  switch (action.type) {
    case ADD_PLAYER:
      if (findPlayerById())
        throw new Error('Cannot have duplicate named players');
      player = {
        name: action.name,
        hand: [],
        keepers: [],
        status: PlayerStatus.PLAYING,
        id: nextId++
      };
      return [...state, player];
    case ADD_CARD_TO_HAND:
      playerIdx = findIndexById(state, action.playerId);
      if (playerIdx !== -1) {
        player = state[playerIdx];
        return [
          ...state.slice(0, playerIdx),
          { ...player, hand: [...player.hand, action.card] }
        ];
      } else {
        return state;
      }
    case ADD_KEEPER:
      playerIdx = findIndexById(state, action.playerId);
      if (playerIdx !== -1) {
        player = state[playerIdx];
        return [
          ...state.slice(0, playerIdx),
          { ...player, keepers: [...player.keepers, action.card] }
        ];
      } else {
        return state;
      }
    case RESET:
      nextId = 0;
      return initialState;
    default:
      return state;
  }
};

export default reducer;
