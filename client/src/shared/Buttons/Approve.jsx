import { Button } from '@mui/material';

const style = {
  width: '100px',
  color: '#2AB957',
  background: '#F3FDEE',
  fontSize: '14px',
  fontWeight: 400,
  textTransform: 'none',
  ':hover': {
    background: 'rgba(165, 244, 125, 0.04)',
  }
};

const ApproveButton = ({ sx }) => {
  return(
    <Button sx={{ ...style, ...sx }}>Approve</Button>
  );
};

export default ApproveButton; 