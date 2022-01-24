import { setIsLoader, setRequestError } from '..';
import { createComment, getComments, deleteComment } from '../../services/comments.service';

export const fetchCreateComments = (payload) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    await createComment(payload);
  } catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};

export const fetchComments = (itemId) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    return await getComments({ params: { itemId } });
  } catch (e) {
    dispatch(setRequestError(e)); 
  } finally {
    dispatch(setIsLoader(false));
  }
};

export const fetchDeleteComment = (id) => async (dispatch) => {
  dispatch(setIsLoader(true));
  try {
    return await deleteComment(id);
  }
  catch (e) {
    dispatch(setRequestError(e));
  } finally {
    dispatch(setIsLoader(false));
  }
};


