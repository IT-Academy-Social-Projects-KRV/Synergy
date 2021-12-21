import { setRequestError, setProjectList, setProjectPages, setIsLoader } from '..';
import { getSortProjects } from '../../services/projects.service';

export const fetchSortProjectList = (options, page) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    const res = await getSortProjects(options, page);
    dispatch(setProjectList(res.data.projects));
    dispatch(setProjectPages(res.data.totalPages));
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};