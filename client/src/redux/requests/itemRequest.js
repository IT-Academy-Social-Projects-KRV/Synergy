import { setIsLoader, setRequestError } from '..';
import { setItem } from '../actions/itemAction';
import { createItem, getItemById, updateItem } from '../../services/item.service';

export const fetchCreateItem = (payload) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    await createItem(payload);
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};

export const fetchItemById = id => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    const { data } = await getItemById(id);
    dispatch(setItem(data));
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};

export const fetchUpdateItem = (payload) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    const res = await updateItem(payload);
    dispatch(setItem(res.data));
    return res.data;
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  } 
};