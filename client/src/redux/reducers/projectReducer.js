import { createReducer } from '@reduxjs/toolkit';
import { setProject } from '../actions/projectAction';

const initialState = {
  project: null,
};

export const projectReducer = createReducer(initialState, {
  [setProject]: (state, action) => {
    state.project = action.payload;
  },
});
