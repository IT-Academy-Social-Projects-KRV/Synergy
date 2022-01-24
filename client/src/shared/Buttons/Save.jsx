import { Button } from '@mui/material';

const style = {
  width: '180px',
  height: '35px',
  color: '#FFFFFF',
  background: '#7872D6',
  fontSize: '12px',
  fontWeight: 700,
  textTransform: 'none',
  lineHeight: '14px',
  ':hover': {
    background: 'rgba(100, 95, 181)',
  }
};

const SaveButton = ({ sx, clickHandler, text, type }) => {
  return (
    <Button onClick={clickHandler} type={type} sx={{ ...style, ...sx }}>{text}</Button>
  );
};

export default SaveButton;