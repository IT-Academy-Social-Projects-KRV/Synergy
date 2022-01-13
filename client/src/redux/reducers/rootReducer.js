import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';
import { projectListReducer } from './projectListReducer';
import { helperReducer } from './helperReducer';


const rootReducer = combineReducers({
  user: userReducer,
  projectList: projectListReducer,
  helpers: helperReducer,
});

export default rootReducer;