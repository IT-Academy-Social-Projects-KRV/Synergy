import React from 'react';
import RangeInput from '../RangeInput/RangeInput';
import { Button } from '@mui/material';
import SearchNameInput from '../SearchNameInput/SearchNameInput';
import DateStartInput from '../DateSortInputs/DateStartInput';
import DateFinishInput from '../DateSortInputs/DateFinishInput';
import SelectInputSortBy from '../SelectInput/SelectInputSortBy';
import SelectInputSortDirection from '../SelectInput/SelectInputSortDirection';
import styles from './SortComponent.module.scss';


const SortComponent = ({ sendSort, options, setOptions }) => {

  return (
    <>
      <RangeInput options={options} setOptions={setOptions} />
      <div className={styles.container}>
        <SearchNameInput options={options} setOptions={setOptions} />
        <DateStartInput options={options} setOptions={setOptions} />
        <DateFinishInput options={options} setOptions={setOptions} />
        <SelectInputSortBy options={options} setOptions={setOptions} />
        <SelectInputSortDirection options={options} setOptions={setOptions} />
        <Button variant='outlined' onClick={sendSort}>Sort</Button>
      </div>
    </>
  );
};

export default SortComponent;