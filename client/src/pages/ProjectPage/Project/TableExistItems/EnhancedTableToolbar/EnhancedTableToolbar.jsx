import { IconButton, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  
  const style = { 
    textField: {
      color: '#7771D4',
      ml: 4,
    },
  };

  return (
    <Toolbar>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} selected
        </Typography>
      ) : null}
  
      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <Tooltip title='Filter list'>
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
  
          <TextField
            sx={style.textField}
            id='outlined-textarea'
            label='Search'
            placeholder='Type item...'
            multiline
            size='small'
          />
        </>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;