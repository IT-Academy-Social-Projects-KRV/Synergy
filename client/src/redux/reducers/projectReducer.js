import { createReducer } from '@reduxjs/toolkit';
import { setProjectList } from '../actions/projectAction';
import { initialState } from '../initialState';


export const projectReducer = createReducer(initialState, {
  [setProjectList]: (state, action) => {
    state.projectList = action.payload;
  },
});