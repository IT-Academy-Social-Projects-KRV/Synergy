import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItemById } from '../../../../services/item.service';
import { updateItem } from '../../../../services/item.service';
import Loader from '../../../../components/Loader';
import STATUS from '../../../../consts/itemStatuses';
import routes from '../../../../configs/routes';
import Approve from '../../../../shared/Buttons/Approve';
import Reject from '../../../../shared/Buttons/Reject';
import { Save } from '../../../../shared/Buttons';
import { Input } from '@mui/material';
import { TextField } from '@mui/material';
import { style } from '../ItemPage/style';
import styles from './ItemPage.module.scss';
import Comments from './CommentFunctionality/Comments';

const ItemPage = (props) => {

  const [item, setItem] = useState(null);
  const [isLoader, setLoader] = useState(true);
  const [response, setResponse] = useState();
  
  const fetchItem = async () => {
    const response = await getItemById(props.match.params.id);
    setItem(response.data);
    setLoader(false);
  };

  const handleUpdateItem = async () => {
    const response = await updateItem(item, item.id);
    setResponse(response);
    setItem(response.data);
    setDisabled(true);
    setLoader(false);
  };

  useEffect( async() => {
    await fetchItem();
  }, [response]);

  const [disabled, setDisabled] = useState(true);

  const editItem = () => {
    setDisabled(prevState => !prevState);
  };

  return (
    isLoader ? <Loader /> :
      <div className={styles.content}>
        <div className={styles.content__caption}>
          <Link to={`${routes.AuthRoutes.pathToProject}/${item.projectId}`}>&larr; Back</Link>
          <h1>
            <Input
              name='name'
              defaultValue={item.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              disabled={disabled}
              disableUnderline={true}
              inputProps={{ style: { textAlign: 'center' } }}
              sx={style.inputName}
            />
          </h1>
          <Save clickHandler={editItem} text='Edit' variant='contained' type='submit' sx={style.button}/>
          {disabled ?
            null
            :
            <Save clickHandler={handleUpdateItem} text='Save' variant='contained' type='submit'  sx={style.button}/>
          }
        </div>
        <div className={styles.content__main}>
          <div className={styles.information}>
            <div className={styles.input}>
              <p>Data added</p>
              <Input
                name='date'
                value={new Date(item.createdAt).toLocaleDateString()}
                disabled={disabled}
                disableUnderline={true}
                sx={style.inputDate}
              />
            </div>
            <div className={styles.input}>
              <p>Cost</p>
              <Input
                name='price'
                defaultValue={item.price}
                onChange={(e) => setItem({ ...item, price: e.target.value })}
                disabled={disabled}
                disableUnderline={true}
                sx={style.inputPrice}
              />
            </div>
            <div className={styles.input}>
              <p>Status</p>
              <Input 
                variant='contained'
                defaultValue={ STATUS[item.statusId] }
                disabled
                disableUnderline={true}
                inputProps={{ style: { textAlign: 'center' } }}
                sx={style.disable}
              />
            </div>
            <div className={styles.description}>
              <p>Description</p>
              <TextField
                name='description'
                variant='standard'
                multiline
                defaultValue={item.description}
                onChange={(e) => setItem({ ...item, description: e.target.value })}
                disabled={disabled}
                InputProps={{ disableUnderline: true }}
                sx={style.inputDescription}
              />
            </div>
            <Approve sx={{ ...style.approveAndReject, ...style.approve }}/>
            <Reject sx={style.approveAndReject}/>
          </div>
          <Comments item = {item.id}></Comments>
        </div>
      </div>
  );
};

export default ItemPage;