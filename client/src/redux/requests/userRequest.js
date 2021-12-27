import { setIsLoader, setRequestError, setUser } from '..';
// import statusCode from '../../consts/statusCode';
// import { logIn } from '../../services/user.service';
import { register } from '../../services/user.service';


export const fetchLoginUser = (
  //payload
) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    sessionStorage.setItem('token', ('dfdsfsfsfsf'));
    sessionStorage.setItem('user', JSON.stringify({ id: 1, roleId: 2 }));
    dispatch(setUser(JSON.parse(sessionStorage.getItem('user'))));
    // const res = await logIn(payload);

    // if (res.status === statusCode.OK) {
    //   sessionStorage.setItem('user',JSON.stringify(res.data.user));
    //   sessionStorage.setItem('token', res.data.token);
    //   dispatch(setUser(res.data.user));
    //   dispatch(setIsAuthed(true));
    // }
  }
  catch (e) {
    dispatch(setRequestError(e));
  }
  finally {
    dispatch(setIsLoader(false));
  }

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
};

export const fetchRegisterUser = (payload) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    return await register(payload);
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};







