import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [thunk];

let store;

const isInTest = typeof global.it === 'function';
if (isInTest) {
  console.log('Running in test mode');
  store = createStore(rootReducer, applyMiddleware(...middleware));
} else {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

export default store;
