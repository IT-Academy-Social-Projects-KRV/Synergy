import { setIsLoader, setRequestError, setUser } from '..';
import { logIn, register, userChanges } from '../../services/user.service';
import statusCode from '../../consts/statusCode';

export const fetchLoginUser = (
  payload
) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    const res = await logIn(payload);
    if (res.status === statusCode.OK) {
      localStorage.setItem('user',JSON.stringify(res.data.user));
      localStorage.setItem('token', res.data.token);
      dispatch(setUser(res.data.user));
    }
  }
  catch (e) {
    dispatch(setRequestError(e));
  }
  finally {
    dispatch(setIsLoader(false));
  }
};

export const fetchUpdateUser = (payload) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    const res = await userChanges(payload);
    if (res.status === statusCode.OK) {
      sessionStorage.setItem('user',JSON.stringify(res.data[1][0]));
      dispatch(setUser(res.data[1][0]));
      return res.data[1][0];
    }
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};

export const fetchRegisterUser = (payload) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    await register(payload);
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};


// TODO: Create function for fetching user email in registration.
// export const fetchUserEmail = (payload) => (dispatch) => {
//   const { postRequest } = useHttp();
//   const fetchData = async () => {
//     try {
//       dispatch(setIsLoader(true));
//       const res = await postRequest('login/email', payload);
//       dispatch(setIsExistUser(res.data));
//     }
//     catch (e) {
//       dispatch(setRequestError(e));
//     }
//     finally {
//       dispatch(setIsLoader(false));
//     }
//   };
//   fetchData();
// };

//   const fetchData = async () => {
//     try {
//       dispatch(setIsLoader(true));
//       const res = await postRequest('login/email', payload);
//       dispatch(setIsExistUser(res.data));
//     }
//     catch (e) {
//       dispatch(setRequestError(e));
//     }
//     finally {
//       dispatch(setIsLoader(false));
//     }
//   };
//   fetchData();
// };



