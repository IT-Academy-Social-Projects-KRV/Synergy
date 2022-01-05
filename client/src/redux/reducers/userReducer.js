import { createReducer } from '@reduxjs/toolkit';
import { setUser } from '../actions/userAction';


const initialState = {
  user: JSON.parse(sessionStorage.getItem('user')) //! ??
};

export const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => {
    state.user = action.payload;
  }
});