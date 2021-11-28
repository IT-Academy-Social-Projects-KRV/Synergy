import React from 'react';
import logo from '../../assets/images/Logo/logo.png';
import './loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <img className='rotate' src={logo} alt='logo'/>
    </div>
  );
};

export default Loader;