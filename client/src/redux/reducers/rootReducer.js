import { combineReducers } from '@reduxjs/toolkit';
import { projectReducer } from './projectReducer';
import { userReducer } from './userReducer';
import { projectListReducer } from './projectListReducer';
import { helperReducer } from './helperReducer';
import { itemReducer } from './itemReducer';


const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  projectList: projectListReducer,
  item: itemReducer,
  helpers: helperReducer,
});

export default rootReducer;