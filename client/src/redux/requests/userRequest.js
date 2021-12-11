import { setIsExistUser, setIsLoader, setRequestError } from '..';
import { useHttp } from '../../hooks/useHttp';


export const fetchUserEmail = (payload) => (dispatch) => {
  const { postRequest } = useHttp();

  const fetchData = async () => {
    try {
      dispatch(setIsLoader(true));
      const res = await postRequest('login/email', payload);
      dispatch(setIsExistUser(res.data));
    }
    catch (e) {
      dispatch(setRequestError(e));
    }
    finally {
      dispatch(setIsLoader(false));
    }
  };
  fetchData();
};

export const fetchLoginUser = (payload) => (dispatch) => {
  const { postRequest } = useHttp();

  const fetchData = async () => {
    try {
      dispatch(setIsLoader(true));
      await postRequest('login', payload);
    }
    catch (e) {
      dispatch(setRequestError(e));
    }
    finally {
      dispatch(setIsLoader(false));
    }
  };
  fetchData();
};






