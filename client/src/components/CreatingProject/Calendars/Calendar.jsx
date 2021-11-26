import React, {useEffect} from 'react';
import styles from './Calendar.module.scss';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';

const borderColorInput = '#7973d7';

const Calendar = props => {
  const [value, setValue] = React.useState([null, null]);
  useEffect(() => {
    props.setData({...props.data,
      date_start: new Date(value[0]).toISOString(),
      date_finish: new Date(value[1]).toISOString()});
  }, [value]);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.Calendar}>
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
                sx={{
                  ml: '5%',
                  width: '40%',
                  '& .MuiOutlinedInput-root': {
                    '& > fieldset': {
                      borderColor: borderColorInput,
                    },
                  },
                }}
              />
              <Box sx={{ mx: '3.5%', color: 'silver', fontSize: '11px' }}>
                to
              </Box>
              <TextField
                size='small'
                color='primary'
                {...endProps}
                sx={{
                  width: '40%',
                  '& .MuiOutlinedInput-root': {
                    '& > fieldset': {
                      borderColor: borderColorInput,
                    },
                  },
                }}
              />
            </React.Fragment>
          )}
        />
      </div>
    </LocalizationProvider>
  );
};

export default Calendar;
