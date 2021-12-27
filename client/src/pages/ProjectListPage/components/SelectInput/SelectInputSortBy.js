import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectInputSortBy = ({ options, setOptions }) => {

  const handleChange = event => {
    setOptions({ ...options, sortBy: event.target.value });
  };

  return (
    <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Sort by</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={options.sortBy}
          label='Sort by'
          onChange={handleChange}
        >
          <MenuItem value='name'>Name</MenuItem>
          <MenuItem value='capital'>Capital</MenuItem>
          <MenuItem value='dateStart'>Date Start</MenuItem>
          <MenuItem value='dateFinish'>Date Finish</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInputSortBy;
