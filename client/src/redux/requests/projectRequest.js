import { setIsLoader, setRequestError, setProject } from '..';
import { createProject, getProjectById } from '../../services/projects.service';

export const fetchProjectById = (payload) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    const { data } = await getProjectById(payload);
    dispatch(setProject(data));
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};

export const fetchCreateProject = (payload) => async (dispatch) => {
  dispatch(setIsLoader(true));

  try {
    await createProject(payload);
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};
