import { createStore, compose, applyMiddleware } from 'redux';

import { reducers } from './actions';
import initialState from './initialState';

export { initialState };

export const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    // Global reducers here
    default:
      newState = state;
  }

  return reducers.reduce((s, r) => r(s, action), newState);
};

const isInTest = typeof global.it === 'function';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = isInTest
  ? createStore(reducer)
  : createStore(
      reducer,
      // composeEnhancers(applyMiddleware(/*...*/))
      window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
// export const store = createStore(reducer);

export { store };
