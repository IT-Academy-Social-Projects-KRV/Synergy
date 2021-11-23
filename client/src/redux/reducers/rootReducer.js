import { projectReducer } from '../reducers/projectReducer';
import { userReducer } from '../reducers/userReducer';

export const rootReducer = {
  user: userReducer,
  project: projectReducer
};