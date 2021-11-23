import { createReducer } from '@reduxjs/toolkit';
import { setUser } from '../actions/userAction';
import { initialState } from '../initialState';


export const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => {
    state.user = action.payload;
  },
});