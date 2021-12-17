import React from 'react';
import { Pagination } from '@mui/material';
import './Pagination.scss';

const PaginationBar = ({ totalPages, sendSort, options }) => {

  const handlerPage = (e, value) => {
    sendSort({ ...options }, value);
  };
  return <Pagination
    onChange={handlerPage}
    count={totalPages} shape='rounded'
  />;
};

export default PaginationBar;