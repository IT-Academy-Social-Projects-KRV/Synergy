import { setRequestError, setProjectList, setIsLoader } from '..';
import { getSortProjects } from '../../services/projects.service';

export const fetchSortProjectList = (options) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    const res = await getSortProjects(options);
    dispatch(setProjectList(res.data));
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};