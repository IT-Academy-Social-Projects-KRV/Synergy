import React from 'react';
import { Pagination } from '@mui/material';
import './Pagination.scss';

const PaginationBar = ({ currentPage, totalPages, options, setOptions }) => {

  const handlerPage = (e, value) => {
    setOptions({ ...options, page: value });
  };

  return <Pagination
    page={Number(currentPage)}
    count={totalPages} 
    onChange={handlerPage}
    shape='rounded'
  />;
};

export default PaginationBar;