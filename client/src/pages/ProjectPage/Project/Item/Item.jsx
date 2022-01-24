import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styles from './Item.module.scss';
import { useForm } from 'react-hook-form';
import { fetchCreateItem } from '../../../../redux';
import { useDispatch } from 'react-redux';
import { valRequired } from '../../../../consts/validationPropertiesForFields';
import validStyle from '../../../../consts/validation.module.scss';
import { useParams } from 'react-router-dom';
import { Save } from '../../../../shared/Buttons';

const STATUS_NEW = 1;

const Item = ({ refreshList }) => {

  const style = {
    btnSubmit: {
      backgroundColor: '#7771d4',
      marginLeft: '20px',
      height: '35px',
      width: '180px',
      borderRadius: '10px',
      marginTop: '20px',
      letterSpacing: '2px',
      '&:hover': {
        backgroundColor: '#645fb5',
      },
    },

    boxBtn: {
      display: 'flex',
      marginLeft: '45px',
    },
  };

  const params = useParams();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const [itemForm, setItemForm] = useState({
    name: '',
    description: '',
    price: '',
    priceMargin: '',
    projectId: params.id,
    statusId: STATUS_NEW
  });

  const handleCreateItem = async () => {
    await dispatch(fetchCreateItem(itemForm));
    refreshList();
  };
  const sendForm = () => {
    handleCreateItem();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(sendForm)}>
      <Box className={styles.item}>
        <Box className={styles.item__textField}>
          <div className={styles.item__idBlock}>
            <p className={styles.itemId}>#1</p>
          </div>

          <input
            className={styles.item__titleTextField}
            placeholder='Title...'
            {...register('name', valRequired)}
            onChange={(e) =>
              setItemForm({
                ...itemForm,
                name: e.target.value
              })
            }
          />

          <div className={validStyle.textBlock, validStyle.validBlock}>
            {errors?.name && <p className={styles.valBLock}>{errors?.name?.message || 'Error, try again'}</p>}
          </div>

          <input
            type='number'
            className={styles.item__priceTextField}
            placeholder='Price...'
            {...register('price', valRequired)}
            onChange={(e) =>
              setItemForm({
                ...itemForm,
                price: e.target.value
              })
            }
          />
          <div className={validStyle.textBlock, validStyle.validBlock}>
            {errors?.price && <p className={styles.valBLock}>{errors?.price?.message || 'Error, try again'}</p>}
          </div>
        </Box>

        <Box className={styles.item__desc}>
          <textarea
            className={styles.item__descText}
            placeholder='Description...'
            {...register('description', valRequired)}
            onChange={(e) =>
              setItemForm({
                ...itemForm,
                description: e.target.value
              })
            }
          />
          <div className={validStyle.textBlock, validStyle.validBlock}>
            {errors?.description && <p className={styles.valBLock}>
              {
                errors?.description?.message || 'Error, try again'}</p>
            }
          </div>

          <input
            type='number'
            className={styles.item__priceTextField}
            placeholder='Tax...'
            {...register('priceMargin', valRequired)}
            onChange={(e) =>
              setItemForm({
                ...itemForm,
                priceMargin: e.target.value
              })
            }
          />
          <div className={validStyle.textBlock, validStyle.validBlock}>
            {errors?.priceMargin && <p className={styles.valBLock}>
              {
                errors?.priceMargin?.message || 'Error, try again'}</p>
            }
          </div>
        </Box>

        <Box sx={style.boxBtn}>
          <Save text='Save' sx={style.btnSubmit} variant='contained' type='submit' />
        </Box>
      </Box>
    </form>
  );
};
export default Item;
