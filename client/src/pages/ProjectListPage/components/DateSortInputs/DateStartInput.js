import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const DateStartInput = ({ options, setOptions }) => {

  //TEMPORARY SOLUTION!!!
  const style = {
    textfield: {
      '& .MuiInputLabel-outlined': {
        transform: 'translate(14px, 50%) scale(1)'
      }
    }
  };

  const handleChange = newValue => {
    setOptions({ ...options, dateStart: newValue.toISOString() });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label='Date Start'
        inputFormat='yyyy-MM-dd'
        value={options.dateStart}
        onChange={handleChange}
        renderInput={(params) => <TextField sx={style.textfield} {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateStartInput;