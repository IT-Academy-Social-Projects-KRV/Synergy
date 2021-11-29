import { createReducer } from '@reduxjs/toolkit';
import { setProject } from '../actions/projectAction';

const initialState = {
  project: [],
};

export const projectReducer = createReducer(initialState, {
  [setProject]: (state, action) => {
    state.projectList = action.payload;
  },

});
