import { setIsLoader, setRequestError } from '..';
import { useHttp } from '../../hooks/useHttp';


export const createItem = (payload) => (dispatch) => {
  const { postRequest } = useHttp();

  const fetchData = async () => {
    try{
      await postRequest('items', payload);
    }
    catch(e){
      dispatch(setRequestError(e));
    }
    finally{
      dispatch(setIsLoader(false));
    }
  };
  fetchData();
};