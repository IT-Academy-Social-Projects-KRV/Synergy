import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import routes from '../../../configs/routes';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { styleAccount } from '../../../consts/accountPageProject';
import { fetchCustomersList } from '../../../redux';
import  { headCells, styleCustomersList } from '../../../consts/customersList.js';
import TableContainer from '@mui/material/TableContainer';
import CustomersPagination from './CustomersListPagination/CustomersListPagination';
import style from '../../CustomersListPage/components/CustomersListPage.module.scss';

const CustomersListPage = () => {

  const dispatch = useDispatch();

  const [customersList, setCustomersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(7);
  const [searchUsers, setSearchUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  
  const lastCustomers = currentPage * customersPerPage;
  const firstCustomers = lastCustomers - customersPerPage;

  useEffect(async() => {
    
    const response = await dispatch(fetchCustomersList());

    const allUsers = response.data.getAllUsers.map((user) => {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString(),
        updatedAt: new Date(user.updatedAt).toLocaleDateString(),
      };
    });

    setCustomersList(allUsers);

    setSearchUsers(allUsers.slice(firstCustomers, lastCustomers));

    setTotalPages(Math.ceil(allUsers.length / 7));
  }, []);

  const setPaginateOptions = (event, pageNumber) => {
    const lastCustomers = pageNumber * customersPerPage;
    const firstCustomers = lastCustomers - customersPerPage;
    setCurrentPage(pageNumber);
    setSearchUsers(customersList.slice(firstCustomers, lastCustomers));
  };
  
  const searchCustomersList = (value) => {
    const lastCustomers = 1 * customersPerPage;
    const firstCustomers = lastCustomers - customersPerPage;
    const filterCustomers = customersList.filter(customer => {
      return customer.firstName.toLowerCase().includes((value || '').toLowerCase())
          || customer.lastName.toLowerCase().includes((value || '').toLowerCase())
          || customer.email.toLowerCase().includes((value || '').toLowerCase());
    });
        
    const filterCustomersCopy = JSON.parse(JSON.stringify(filterCustomers));
    const filterAtCustomersFirstPage = filterCustomersCopy.splice(firstCustomers, lastCustomers);
  
    setSearchUsers(filterAtCustomersFirstPage);
  
    if (value) {
      setTotalPages(Math.ceil(filterCustomers.length / 7));
    } else {
      setTotalPages(Math.ceil(customersList.length / 7));
    }
    setCurrentPage(1);
  };

  return (
    <>
      <div className={style.customersList_title}>
        <span>Customers</span>
      </div>
      <div className={style.customers_search_input}>
        <input
          type='text'
          placeholder='Search ... '
          className={style.search_input}
          onChange={(event) => searchCustomersList(event.target.value)}
        />
      </div>
      <div className={style.customersList}>
        <TableContainer sx={{ height: '75vh' }}>
          <Table sx={(styleAccount.text, styleAccount.table)}>
            <TableHead>
              <TableRow>
                {headCells.map((headCell, key) => (
                  <TableCell
                    sx={(styleCustomersList.tableHeadStyle)}
                    key={key}>
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={styleAccount.tableBody}>
              {searchUsers.map((row, key) => {
                return (
                  <TableRow
                    key={key}>
                    {Object.keys(row).map((col, id) => {
                      return(
                        <TableCell
                          key={id}
                          sx={(col === 'id' ? styleAccount.blockId : null)}
                          align={'left'}
                          scope='row'>
                          { row[col] } 
                        </TableCell>);
                    })}
                    
                    <TableCell sx={styleAccount.text}>
                      <Button>
                        <Link to={`${routes.AuthRoutes.pathToProject}/${row.id}`}>
                          <OpenInNewIcon sx={{ color: '#7771D4' }} />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>);
              })}
            </TableBody>
          </Table>
          <CustomersPagination
            setPaginateOptions={setPaginateOptions}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </TableContainer>
      </div>
    </>
  );
};

export default CustomersListPage;