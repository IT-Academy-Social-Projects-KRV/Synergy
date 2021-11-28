import { Button, ButtonGroup } from '@mui/material';

const ApproveRejectButtons = () => {
  return(
    <ButtonGroup sx={{p: 3}}>
      <Button variant='contained' color='success'>Aprrove</Button>
      <Button variant='outlined' color='error'>Reject</Button>
    </ButtonGroup>
  );
};

export default ApproveRejectButtons;