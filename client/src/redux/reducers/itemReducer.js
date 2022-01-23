import { createReducer } from '@reduxjs/toolkit';
import { setItem } from '../actions/itemAction';

const initialState = {
  item: null,
};

export const itemReducer = createReducer(initialState, {
  [setItem]: (state, action) => {
    state.item = action.payload;
  }
});