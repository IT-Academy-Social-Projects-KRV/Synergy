import React from 'react';
import RangeInput from '../RangeInput/RangeInput';
import { Button } from '@mui/material';
import SearchNameInput from '../SearchNameInput/SearchNameInput';
import DateStartInput from '../DateSortInputs/DateStartInput';
import DateFinishInput from '../DateSortInputs/DateFinishInput';
import SelectInputSortBy from '../SelectInput/SelectInputSortBy';
import SelectInputSortDirection from '../SelectInput/SelectInputSortDirection';


const SortComponent = ({ sendSort, options, setOptions }) => {
  const handleClick = () => {
    sendSort({ ...options });
  };
  return (
    <div>
      <RangeInput options={options} setOptions={setOptions} />
      {/* eslint-disable-next-line max-len */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 40 + 'px', paddingRight: 40 + 'px' }}>
        <SearchNameInput options={options} setOptions={setOptions} />
        <DateStartInput options={options} setOptions={setOptions} />
        <DateFinishInput options={options} setOptions={setOptions} />
        <SelectInputSortBy options={options} setOptions={setOptions} />
        <SelectInputSortDirection options={options} setOptions={setOptions} />
        <Button variant='outlined' onClick={handleClick}>Sort</Button>
      </div>
    </div>
  );
};

export default SortComponent;