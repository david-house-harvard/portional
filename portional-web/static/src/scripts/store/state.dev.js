import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from '../containers/DevTools';
import logger from 'redux-logger';

import callApiMiddleware from './actions/call-api-middleware';

const middleware = [
  callApiMiddleware,
  logger,
  thunk,
];

const enhancer = compose(
  applyMiddleware(...middleware),
  DevTools.instrument(),
);

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./reducers/index', () =>
      store.replaceReducer(require('./reducers/index'))
    );
  }

  return store;
};

export default configureStore;
