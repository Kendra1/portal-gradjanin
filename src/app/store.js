import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './app.reducer';
import { rootSaga } from './app.saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const setUpStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
};

let store = null;

export const configureStore = () => {
  if (!store) {
    store = setUpStore();
  }
  return store;
};
