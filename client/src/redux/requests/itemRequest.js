import { setIsLoader, setRequestError, setItem } from '..';
import { createItem, getItemById } from '../../services/item.service';

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

export const fetchItemById = id => async dispatch => {
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