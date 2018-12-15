import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [thunk];

let store;

const isInTest = typeof global.it === 'function';
if (isInTest) {
  store = createStore(rootReducer);
} else {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

export { store };
