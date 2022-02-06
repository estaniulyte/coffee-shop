import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoIcon from 'assets/images/cafe-logo.png';

import ActionButtonsSection from './components/ActionButtonsSection';
import Tabs from './components/Tabs';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__item logo">
        <NavLink to="/">
          <img src={LogoIcon} alt="logo" />
        </NavLink>
      </div>
      <div className="header__item tabs">
        <Tabs />
      </div>
      <div className="header__item action-buttons">
        <ActionButtonsSection />
      </div>
    </header>
  );
};

export default Header;
