import { setIsLoader, setRequestError } from '..';
import { createItem } from '../../services/item.service';

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
