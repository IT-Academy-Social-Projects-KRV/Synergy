import React, { useContext, useState } from 'react';
import Calendar from './components/Calendar';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Loader from '../../components/Loader';
import { AlertContext } from '../../components/Alert/context/AlertContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateProject, isLoaderSelector } from '../../redux';
import { style } from '../CreatingProjectPage/style.jsx';
import { useForm } from 'react-hook-form';
import styles from './CreatingProject.module.scss';
import validStyle from '../../consts/validation.module.scss';
import { valCapital, valEmail, valRequired } from '../../consts/validationPropertiesForFields';
import { Button } from '@mui/material';

const Content = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const dispatch = useDispatch();

  const isLoader = useSelector(isLoaderSelector);

  const alert = useContext(AlertContext);

  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    capital: '',
    dateStart: '',
    dateFinish: ''
  });

  const handleCreateProject = () => {
    dispatch(fetchCreateProject(projectForm)).then(res => {
      res !== undefined ?
        alert.show('Project was created', 'success') :
        alert.show('Something went wrong', 'error');
    });
  };

  const sendForm = async () => {
    handleCreateProject();
    reset();
  };

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div className={styles.content}>
          <div className={styles.content__stuffing}>
            <h1>Create project</h1>
            <form className={styles.mainForm} onSubmit={handleSubmit(sendForm)}>
              <div className={`${styles.inputTextfield} ${styles.inputWithMarginRight}`}>
                <div className={styles.label}>Project title</div>
                <TextField
                  {...register('title', valRequired)}
                  onChange={(e) =>
                    setProjectForm({
                      ...projectForm,
                      name: e.target.value
                    })
                  }

                  size='small'
                  sx={style.textFieldWithMarginRight}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <BorderColorIcon sx={style.icons} />
                      </InputAdornment>
                    ),
                    placeholder: 'Title...'
                  }}
                />
                <div className={validStyle.textBlock, validStyle.validBlock}>
                  {errors?.title && <p>{errors?.title?.message || 'Error, try again'}</p>}
                </div>
              </div>

              <div className={styles.inputTextfield}>
                <div className={styles.label}>Customer email</div>
                <TextField
                  {...register('email', valEmail)}
                  size='small'
                  sx={style.textFieldWithoutMargin}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PersonIcon sx={style.icons} />
                      </InputAdornment>
                    ),
                    placeholder: 'Email...'
                  }}
                />
                <div className={validStyle.textBlock, validStyle.validBlock}>
                  {errors?.email && <p>{errors?.email?.message || 'Error, try again'}</p>}
                </div>
              </div>
              <div className={`${styles.inputTextfield} ${styles.inputWithMarginRight}`}>
                <div className={styles.label}>Capital</div>
                <TextField
                  {...register('capital', valCapital)}
                  onChange={(e) =>
                    setProjectForm({
                      ...projectForm,
                      capital: e.target.value
                    })
                  }
                  size='small'
                  sx={style.textFieldWithMarginRight}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <AttachMoneyIcon sx={style.icons} />
                      </InputAdornment>
                    ),
                    type: 'number',
                    placeholder: 'Capital...'
                  }}
                />
                <div className={validStyle.textBlock, validStyle.validBlock}>
                  {errors?.capital && <p>{errors?.capital?.message || 'Error, try again'}</p>}
                </div>
              </div>
              <div className={styles.inputTextfield}>
                <div className={styles.label}>Data release</div>
                <Calendar data={projectForm} setData={setProjectForm} />
              </div>
              <div className={styles.inputTextArea}>
                <div className={styles.textAreaLabel}>Description</div>
                <textarea
                  onChange={(e) =>
                    setProjectForm({
                      ...projectForm,
                      description: e.target.value,
                    })
                  }
                  className={styles.textareaDescription}
                  placeholder='Description...'
                />
              </div>
              <div className={styles.button}>
                <Button type='submit' className={styles.saveButton}>
                  SAVE
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Content;