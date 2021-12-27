import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectInputSortDirection = ({ options, setOptions }) => {

  const handleChange = event => {
    setOptions({ ...options, sortDirection: event.target.value });
  };

  return (
    <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Sort Direction</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={options.sortDirection}
          label='Sort direction'
          onChange={handleChange}
        >
          <MenuItem value='ASC'>From smallest</MenuItem>
          <MenuItem value='DESC'>From biggest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInputSortDirection;