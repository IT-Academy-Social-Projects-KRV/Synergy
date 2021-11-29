import { createReducer } from '@reduxjs/toolkit';
import { setIsLoader,setRequestError } from '../actions/helperAction';

const initialState = {
  isLoader: false,
  requestError:'',
};

export const helperReducer = createReducer(initialState, {
  [setIsLoader]: (state, action) => {
    state.isLoader = action.payload;
  },
  [setRequestError]: (state, action) => {
    state.requestError = action.payload;
  }
});

