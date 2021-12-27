import React from 'react';
import { TextField } from '@mui/material';

const SearchNameInput = ({ options, setOptions }) => {
  const style = {
    textField: {
      color: '#7771D4',
      ml: 4,
    },
  };

  const handleChange = (e) => {
    setOptions({ ...options, name: e.target.value });
  };

  return (
    <div>
      <TextField
        sx={style.textField}
        id='outlined-textarea'
        label='Search by name'
        placeholder='Type project...'
        multiline
        size='small'
        value={options.name}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchNameInput;