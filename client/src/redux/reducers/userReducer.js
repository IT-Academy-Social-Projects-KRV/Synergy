import { createReducer } from '@reduxjs/toolkit';
import { setUser, setIsExistUser } from '../actions/userAction';


const initialState = {
  user: {},
  isExistUser: false,
};

export const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => {
    state.user = action.payload;
  },
  [setIsExistUser]: (state, action) => {
    state.isExistUser = action.payload;
  },
});