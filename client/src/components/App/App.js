import React from 'react';
import './App.css';
import Routes from '../../routes/route';
import { AlertState } from '../Alert/context/AlertState';

const App = () => {
  return (
    <AlertState>
      <Routes />
    </AlertState>
  );
};

export default App;
