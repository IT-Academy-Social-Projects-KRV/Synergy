import { setIsExistUser, setIsLoader, setRequestError, setUser } from '..';
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
      const res = await postRequest('user/login', payload);
      if (res.status === 200) {
        sessionStorage.setItem('user',JSON.stringify(res.user));
        sessionStorage.setItem('userToken', res.token);
        dispatch(setUser(res.user));
        dispatch(setIsExistUser(true));
      }
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






