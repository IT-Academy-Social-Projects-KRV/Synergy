import { setIsLoader, setRequestError } from '..';
import { useHttp } from '../../hooks/useHttp';
import { setProjectList } from '..';

export const fetchProjectList = () => (dispatch) => {
  const { getRequest } = useHttp();

  const fetchData = async () => {
    try {
      dispatch(setIsLoader(true));
      const res = await getRequest('project');
      dispatch(setProjectList(res.data.projects));
    } catch (e) {
      dispatch(setRequestError(e));
    } finally {
      dispatch(setIsLoader(false));
    }
  };
  fetchData();
};
