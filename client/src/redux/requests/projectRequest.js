import { setIsLoader, setRequestError } from '..';
import { useHttp } from '../../hooks/useHttp';


export const fetchCreateProject = (payload) => (dispatch) => {
  const {postRequest} = useHttp();

  const fetchData = async () => {
    try{
      //dispatch(setIsLoader(true));
      await postRequest('project',payload);
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