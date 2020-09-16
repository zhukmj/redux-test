import { createStore } from 'redux';
import { messageReducer } from './reducers';

export const store = createStore(
  messageReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
