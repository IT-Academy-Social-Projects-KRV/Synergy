import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import styles from '../../CreatingProject.module.scss';
import { style } from '../../style.jsx';

const Calendar = ({ data, setData }) => {
  
  const [value, setValue] = React.useState([null, null]);

  useEffect(() => {
    setData({
      ...data,
      dateStart: new Date(value[0]).toISOString(),
      dateFinish: new Date(value[1]).toISOString(),
    });
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.calendar}>
        <DateRangePicker
          startText=''
          endText=''
          calendars={1}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField
                label=''
                size='small'
                color='primary'
                {...startProps}
                sx={style.textFieldStart}
              />
              <Box sx={style.box}>to</Box>
              <TextField
                size='small'
                color='primary'
                {...endProps}
                sx={style.textFieldEnd}
              />
            </React.Fragment>
          )}
        />
      </div>
    </LocalizationProvider>
  );
};

export default Calendar;
