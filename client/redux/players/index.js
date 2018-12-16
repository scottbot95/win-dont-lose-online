export * from './actions';
export * from './constants';

import reducer from './reducer';
import initialState from './initialState';
export default reducer;

export const getPlayerArray = playersObj => {
  return Object.keys(playersObj)
    .map(key => !initialState[key] && playersObj[key])
    .filter(elem => elem);
};
