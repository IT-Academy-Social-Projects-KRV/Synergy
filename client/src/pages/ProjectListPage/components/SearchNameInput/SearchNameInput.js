import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchNameInput = ({ options, setOptions }) => {
  const style = {
    textField: {
      color: '#7771D4',
      ml: 4,
    },
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
        onChange={e => void setOptions({ ...options, name: e.target.value })}
      />
    </div>
  );
};

export default SearchNameInput;