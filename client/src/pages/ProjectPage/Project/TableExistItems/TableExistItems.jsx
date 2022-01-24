import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from './TableExistItems.module.scss';
import routes from '../../../../configs/routes';
import { Link } from 'react-router-dom';
import STATUS from '../../../../consts/itemStatuses';
import EnhancedTableHead  from './EnhancedTableHead/EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar/EnhancedTableToolbar';
import { style, rows } from '../../../../consts/tableExistItems';
import { Button } from '@mui/material';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const mappedItems = (array) => {
  return array.map(item => {
    return {
      id: item.id,
      nameItem: item.name,
      costItem: item.price,
      dataAddedItem: item.updatedAt,
      statusItem: item.statusId,
    };
  });
};

const ExistItems = ({ itemsData }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('nameItem');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [items, setItems] = useState([]);

  const isSelected = (nameItem) => selected.indexOf(nameItem) !== -1;
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  useEffect(() => {
    setItems(mappedItems(itemsData));
  }, [itemsData]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.nameItem);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, nameItem) => {
    const selectedIndex = selected.indexOf(nameItem);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, nameItem);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  return (
    <>
      <h1 className={styles.table__title}>Exist Items</h1>
      <Box>
        <Paper sx={style.boxTable}>
          <EnhancedTableToolbar numSelected={selected.length} />

          <TableContainer sx={{ height: '70vh' }}>
            <Table sx={(style.text, style.table)} aria-labelledby='tableTitle'>
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody sx={style.tableBody}>
                {stableSort(items, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.nameItem);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        height='50px'
                        hover
                        onClick={(event) => handleClick(event, row.nameItem)}
                        role='checkbox'
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding='checkbox'>
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                            sx={{
                              color: '#7771D4',
                            }}
                          />
                        </TableCell>

                        <TableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          sx={style.blockId}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell sx={style.text}>{row.nameItem}</TableCell>
                        <TableCell sx={style.text}>${row.costItem}</TableCell>
                        <TableCell sx={style.text}>
                          {new Date(row.dataAddedItem).toLocaleDateString()}
                        </TableCell>
                        <TableCell sx={style.text}>
                          <Box className={styles.statusApplied}>
                            {STATUS[row.statusItem]}
                          </Box>
                        </TableCell>
                        <TableCell sx={style.text}>
                          <Button>
                            <Link to={`${routes.AuthRoutes.pathToItemPage}/${row.id}`}>
                              <OpenInNewIcon sx={{ color: '#7771D4' }} />
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow>
                    <TableCell colSpan={7} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            sx={style.tablePagination}
            rowsPerPageOptions={[5, 10, 20]}
            component='div'
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
};

export default ExistItems;
