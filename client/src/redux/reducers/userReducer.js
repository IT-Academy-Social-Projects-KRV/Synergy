import { createReducer } from '@reduxjs/toolkit';
import { setUser } from '../actions/userAction';


const initialState = {
  user: {},
};

export const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => {
    state.user = action.payload;
  },
});