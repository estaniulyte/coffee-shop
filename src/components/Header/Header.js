import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import LogoIcon from 'assets/images/cafe-logo.png';

import ActionButtonsSection from './components/ActionButtonsSection';
import Tabs from './components/Tabs';
import HamburgerMenu from './components/HamburgerMenu';

import './header.scss';
import HamburgerButton from './components/HamburgerButton';

const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () =>
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);

  return (
    <header className="header">
      <div className="header__item hamburger-menu">
        <button className="button" onClick={toggleHamburgerMenu}>
          <HamburgerButton isActive={isHamburgerMenuOpen} />
        </button>
        {isHamburgerMenuOpen ? <HamburgerMenu /> : ''}
      </div>
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
