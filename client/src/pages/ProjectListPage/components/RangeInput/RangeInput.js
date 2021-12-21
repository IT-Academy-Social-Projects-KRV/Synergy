import React from 'react';
import { Box, Slider } from '@mui/material';
import style from './InputRange.module.scss';

const RangeInput = ({ options, setOptions }) => {

  const handleChange = e => {
    setOptions({ ...options, capital: e.target.value });
  };

  return (
    <>
      <h3 style={{ paddingLeft: '40px' }}>Filter by capital</h3>
      <div className={style.inputContainer}>
        <Box sx={{ width: '80%' }}>
          <Slider
            value={options.capital}
            getAriaLabel={() => 'Capital range'}
            max={50000}
            valueLabelDisplay='auto'
            onChange={handleChange}
          />
        </Box>
      </div>
    </>
  );
};

export default RangeInput;