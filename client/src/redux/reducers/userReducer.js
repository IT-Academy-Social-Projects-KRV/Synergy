import { createReducer } from '@reduxjs/toolkit';
import { setUser, setIsAuthed } from '../actions/userAction';


const initialState = {
  user: {},
  isAuthed: !!sessionStorage.getItem('token'),
};

export const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => {
    state.user = action.payload;
  },
  [setIsAuthed]: (state, action) => {
    state.isAuthed = action.payload;
  },
});