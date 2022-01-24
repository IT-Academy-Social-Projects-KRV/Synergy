import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItemById } from '../../../../services/item.service';
import Moment from 'moment';
import Loader from '../../../../components/Loader';
import STATUS from '../../../../consts/itemStatuses';
import routes from '../../../../configs/routes';
import Approve from '../../../../shared/Buttons/Approve';
import Reject from '../../../../shared/Buttons/Reject';
import { Button } from '@mui/material';
import { style } from '../ItemPage/style';
import styles from './ItemPage.module.scss';
import Comments from './CommentFunctionality/Comments';

const ItemPage = (props) => {
  const [item, setItem] = useState(null);
  const [isLoader, setLoader] = useState(true);

  const fetchItem = async () => {
    const response = await getItemById(props.match.params.id);
    setItem(response.data);
    setLoader(false);
  };

  useEffect(() => {
    fetchItem();
  }, []);
  
  return (
    isLoader ? <Loader /> :
      <div className={styles.content}>
        <div className={styles.content__caption}>
          <Link to={`${routes.AuthRoutes.pathToProject}/${item.projectId}`}>&larr; Back</Link>
          <h1>{item.name}</h1>
        </div>
        <div className={styles.content__main}>
          <div className={styles.information}>
            <div className={styles.input}>
              <p>Data added</p>
              <p>{Moment(item.createdAt).format('DD.MM.YYYY')}</p>
            </div>
            <div className={styles.input}>
              <p>Cost</p>
              <p>$ {item.price}</p>
            </div>
            <div className={styles.input}>
              <p>Status</p>
              <Button variant='contained' disabled sx={style.disable}>
                {STATUS[item.statusId]}
              </Button>
            </div>
            <div className={styles.description}>
              <p>Description</p>
              <p>
                {item.description}
              </p>
            </div>
            <Approve sx={style.approve}/>
            <Reject sx={style.reject}/>
          </div>
          <Comments item = {item.id}></Comments>
        </div>
      </div>
  );
};

export default ItemPage;