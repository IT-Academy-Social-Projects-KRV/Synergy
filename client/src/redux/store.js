import { configureStore } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { rootReducer } from './reducers/rootReducer';

export const store = configureStore({
  reducer:rootReducer,
  preloadedState:initialState
});
