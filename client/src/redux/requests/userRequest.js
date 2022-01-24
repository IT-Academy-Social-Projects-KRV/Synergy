import { setIsLoader, setRequestError, setUser } from '..';
import { register, userChanges, userList } from '../../services/user.service';
import statusCode from '../../consts/statusCode';
//import { logIn } from '../../services/user.service';

export const fetchLoginUser = (
  //payload
) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    sessionStorage.setItem('token', ('dfdsfsfsfsf'));
    sessionStorage.setItem('user', JSON.stringify({ id: 1, roleId: 2, firstName: 'Steve', lastName: 'Rogers' }));
    dispatch(setUser(JSON.parse(sessionStorage.getItem('user'))));
    // const res = await logIn(payload);

    // if (res.status === statusCode.OK) {
    //   sessionStorage.setItem('user',JSON.stringify(res.data.user));
    //   sessionStorage.setItem('token', res.data.token);
    //   dispatch(setUser(res.data.user));
    // }
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
      sessionStorage.setItem('user', JSON.stringify(res.data[1][0]));
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

export const fetchCustomersList = (payload) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    return await userList(payload);
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};