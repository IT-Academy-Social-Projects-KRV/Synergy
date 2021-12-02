import React, { useReducer } from 'react';
import { AlertContext } from '../context/AlertContext';
import { alertReducer } from '../context/AlertReducer';

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });
  const show = (text, type = 'warning') => {
    dispatch({
      type: 'SHOW_ALERT',
      occur: { text, type },
    });
  };
  const hide = () => dispatch({ type: 'HIDE_ALERT' });

  return (
    <AlertContext.Provider
      value={{
        show,
        hide,
        alert: state,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
