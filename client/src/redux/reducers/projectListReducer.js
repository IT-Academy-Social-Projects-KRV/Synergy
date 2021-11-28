import { createReducer } from '@reduxjs/toolkit';
import { setProjectList } from '../actions/projectListAction';

const initialState = {
  projectList:[],
};

export const projectListReducer = createReducer(initialState, {
  [setProjectList]: (state, action) => {
    state.projectList = action.payload;
  }
});