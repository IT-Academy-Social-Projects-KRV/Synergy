import { setIsLoader, setRequestError, setProjectList } from '..';
import { getAllProjects } from '../../services/projects.service';

export const fetchProjectList = () => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    const res = await getAllProjects();
    dispatch(setProjectList(res.data.projects));
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};
