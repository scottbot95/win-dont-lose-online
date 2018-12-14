import { ADD_PLAYER } from './constants';

export const addPlayer = name => {
  return {
    type: ADD_PLAYER,
    name
  };
};
