import { combineReducers } from '@reduxjs/toolkit';
import { projectReducer } from './projectReducer';
import { userReducer } from './userReducer';
import { projectListReducer } from './projectListReducer';
import { helperReducer } from './helperReducer';


const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  projectList: projectListReducer,
  helpers: helperReducer,
});

export default rootReducer;