import React from 'react';

import Tabs from './components/Tabs';

import LogoIcom from 'assets/images/cafe-logo.png';

import './header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={LogoIcom} alt="logo" />
        </NavLink>
      </div>
      <div className="tabs">
        <Tabs />
      </div>
      <div className="action-buttons">
        <p>buttons</p>
      </div>
    </header>
  );
};

export default Header;
