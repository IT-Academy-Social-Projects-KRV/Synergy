import React from 'react';
import styles from './CreatingProject.module.scss';
import Item from './Items';
import Calendar from './Calendars';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const borderColorInput = '#7973d7';

const Content = () => {
  return (
    <div className={styles.Content}>
      <div className={styles.textContent}>
        <h1>Create project</h1>
        <FormControl variant="standard" className={styles.mainForm}>
          <div className={styles.inputWithLabel}>
            <label className={styles.labelWithMarginLeft}>Project title</label>
            <TextField
              className={styles.title}
              color="primary"
              size="small"
              sx={{
                width: '100%',
                height: '25px',
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': {
                    borderColor: borderColorInput,
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BorderColorIcon
                      sx={{ height: '15px', marginTop: '15px', ml: -1 }}
                    />
                  </InputAdornment>
                ),
                placeholder: 'Type title...',
                border: '1px solid red',
              }}
            />
          </div>
          <div className={styles.inputWithLabel}>
            <label>Customer email</label>
            <TextField
              size="small"
              color="primary"
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': {
                    borderColor: borderColorInput,
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon
                      sx={{ height: '15px', marginTop: '15px', ml: -1 }}
                    />
                  </InputAdornment>
                ),
                placeholder: 'Type owner...',
              }}
            />
          </div>
          <div className={styles.inputWithLabel}>
            <label className={styles.labelWithMarginLeft}>Capital</label>
            <TextField
              size="small"
              color="primary"
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': {
                    borderColor: borderColorInput,
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon
                      sx={{ height: '15px', marginTop: '15px', ml: -1 }}
                    />
                  </InputAdornment>
                ),
                type: 'number',
                placeholder: 'Type capital...',
              }}
            />
          </div>
          <div className={/* styles.inputWithLabel */ styles.calendarOnPage}>
            <label>Data release</label>
            <Calendar />
          </div>
          <div className={styles.inputWithArea}>
            <label className={styles.textareaLabel}>Description</label>
            <div className={styles.textAlignLeft}>
              <div className={styles.longStrip}></div>
              <div className={styles.shortStrip}></div>
              <div className={styles.longStrip}></div>
              <div className={styles.shortStrip}></div>
            </div>
            <textarea
              className={styles.textareaDescription}
              placeholder="Type description..."
            />
          </div>
        </FormControl>
        <div className={styles.addItems}>
          <div className={styles.addItemsTitle}>Add items</div>
          <Item
            id="1"
            typeFirstInput="text"
            typeSecondInput="number"
            typeTax="number"
          />
          <button className={styles.saveButton}>SAVE</button>
        </div>
      </div>
    </div>
  );
};

export default Content;