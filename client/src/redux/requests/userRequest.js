import { setIsLoader, setRequestError, setUser } from '..';
//import statusCode from '../../consts/statusCode';


export const fetchLoginUser = (
  // payload
) => async (dispatch) => {
  dispatch(setIsLoader(true));

  try {
    sessionStorage.setItem('token',('dfdsfsfsfsf'));
    dispatch(setUser({ roleId: 2 }));
    // dispatch(setIsExistUser(true));
    // const res = await postRequest('user/login', payload);
    // if (res.status === statusCode.OK) {
    //   sessionStorage.setItem('user',JSON.stringify(res.user));
    //   sessionStorage.setItem('userToken', res.token);
    //   dispatch(setUser(res.user));
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






