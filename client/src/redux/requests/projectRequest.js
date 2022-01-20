import { setIsLoader, setRequestError } from '..';
import { createProject, getProjectForAccount } from '../../services/projects.service';


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

export const fetchProjectForAccount = (payload) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    return await getProjectForAccount(payload);
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};
