import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const DateFinishInput = ({ options, setOptions }) => {
  const handleChange = newValue => {
    setOptions({ ...options, dateFinish: newValue.toISOString() });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label='Date Finish'
        inputFormat='yyyy-MM-dd'
        value={options.dateFinish}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateFinishInput;