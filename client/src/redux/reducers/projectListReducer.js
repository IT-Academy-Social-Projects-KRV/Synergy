import { createReducer } from '@reduxjs/toolkit';
import { setProjectList } from '../actions/projectListAction';

const initialState = {
  projectList: null,
};

export const projectListReducer = createReducer(initialState, {
  [setProjectList]: (state, action) => {
    state.projectList = action.payload;
  }
});