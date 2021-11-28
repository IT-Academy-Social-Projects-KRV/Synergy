import { projectReducer } from '../reducers/projectReducer';
import { userReducer } from '../reducers/userReducer';
import { projectListReducer } from './projectListReducer';

const rootReducer = {
  user: userReducer,
  project: projectReducer,
  projectList: projectListReducer,
};

export default rootReducer;