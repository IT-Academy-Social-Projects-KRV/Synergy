import React from 'react';
import { Pagination } from '@mui/material';

const CustomersPagination = ({ currentPage, totalPages, setPaginateOptions }) => {
  
  return (
    <Pagination
      page={Number(currentPage)}
      count={totalPages} 
      onChange={setPaginateOptions}
      shape='rounded'
    />
  );
};

export default CustomersPagination;