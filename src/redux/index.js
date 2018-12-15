import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';

const isInTest = typeof global.it === 'function';

const store = isInTest
  ? createStore(rootReducer)
  : createStore(
      rootReducer,
      // composeEnhancers(applyMiddleware(/*...*/))
      window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export { store };
