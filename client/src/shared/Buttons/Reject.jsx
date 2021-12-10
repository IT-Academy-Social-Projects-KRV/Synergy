import { Button } from '@mui/material';

const style = {  
  width: '100px',
  color: '#FF0606',
  background: '#FFF1EE',
  fontSize: '14px',
  fontWeight: 400,
  textTransform: 'none',
  ':hover': {
    background: 'rgba(201, 46, 13, 0.04)',
  }
};

const RejectButton = ({ sx }) => {
  return(
    <Button sx={{ ...style, ...sx }}>Reject</Button>
  );
};

export default RejectButton; 