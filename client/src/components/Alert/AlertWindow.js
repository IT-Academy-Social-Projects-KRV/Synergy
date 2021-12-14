import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import { AlertContext } from './context/AlertContext';

const AlertWindow = () => {
  const { hide, alert } = useContext(AlertContext);
  
  return (
    <div data-testid='alertBlock'>
      {alert?.visible          
        ?
        <Alert
          onClick={hide}
          onClose={() => { }}
          severity={alert.type}>
          {alert.text}
        </Alert>
        : ''}
    </div>
  );
};

export default AlertWindow;