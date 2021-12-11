import React, { useContext, useState } from 'react';
import Calendar from './components/Calendar';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Loader from '../../components/Loader';
import { AlertContext } from '../../components/Alert/context/AlertContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateProject, isLoaderSelector } from '../../redux';
import { style } from '../CreatingProjectPage/style.jsx';
import styles from './CreatingProject.module.scss';

const Content = () => {

  const dispatch = useDispatch();

  const isLoader = useSelector(isLoaderSelector);

  const alert = useContext(AlertContext);

  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    capital: '',
    date_start: '',
    date_finish: '',
  });

  const handleCreateProject = () => {
    dispatch(fetchCreateProject(projectForm));
  };

  const sendForm = async () => {
    handleCreateProject();
    setProjectForm({
      name: '',
      description: '',
      capital: '',
      date_start: '',
      date_finish: '',
    });
    alert.show('Project was created', 'success');
  };
  
  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div className={styles.content}>
          <div className={styles.content__stuffing}>
            <h1>Create project</h1>
            <FormControl variant='standard' className={styles.mainForm}>
              <div className={`${styles.inputTextfield} ${styles.inputWithMarginRight}`}>
                <div className={styles.label}>Project title</div>
                <TextField
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
                        <BorderColorIcon sx={style.icons}/>
                      </InputAdornment>
                    ),
                    placeholder: 'Type title...'
                  }}
                />
              </div>
              <div className={styles.inputTextfield}>
                <div className={styles.label}>Customer email</div>
                <TextField
                  size='small'
                  sx={style.textFieldWithoutMargin}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PersonIcon sx={style.icons}/>
                      </InputAdornment>
                    ),
                    placeholder: 'Type email...'
                  }}
                />
              </div>
              <div className={`${styles.inputTextfield} ${styles.inputWithMarginRight}`}>
                <div className={styles.label}>Capital</div>
                <TextField
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
                        <AttachMoneyIcon sx={style.icons}/>
                      </InputAdornment>
                    ),
                    type: 'number',
                    placeholder: 'Type capital...'
                  }}
                />
              </div>
              <div className={styles.inputTextfield}>
                <div className={styles.label}>Data release</div>
                <Calendar data={projectForm} setData={setProjectForm}/>
              </div>
              <div className={styles.inputTextfield}>
                <div className={styles.textAreaLabel}>Description</div>
                <textarea
                  onChange={(e) =>
                    setProjectForm({
                      ...projectForm,
                      description: e.target.value,
                    })
                  }
                  className={styles.textareaDescription}
                  placeholder='Type description...'
                />
              </div>
              <div className={styles.button}>
                <button onClick={sendForm} className={styles.saveButton}>
                  SAVE
                </button>
              </div>
            </FormControl>
          </div>
        </div>
      )}
    </>
  );
};

export default Content;