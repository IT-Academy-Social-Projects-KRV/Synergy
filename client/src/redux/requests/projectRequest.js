import { setIsLoader, setRequestError } from '..';
import { createProject } from '../../services/projects.service';

export const fetchCreateProject = (payload) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    return await createProject(payload);
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};

