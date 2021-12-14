import React from 'react';
import logo from '../../assets/images/Logo/logo.png';
import './loader.scss';

const Loader = () => {
  return (
    <div data-testid='loaderDiv' className='loader'>
      <img className='rotate' src={logo} alt='logo'/>
    </div>
  );
};

export default Loader;