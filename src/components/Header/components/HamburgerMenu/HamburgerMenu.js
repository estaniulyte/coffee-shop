import React from 'react';
import { NavLink } from 'react-router-dom';

import './hamburger-menu.scss';

const HamburgerMenu = () => {
  const tabItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Cafés',
      link: '/cafes',
    },
    {
      name: 'Media',
      link: '/media',
    },
    {
      name: 'About',
      link: '/about',
    },
  ];

  return (
    <nav className="hamburger">
      <ul className="hamburger__list">
        {tabItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) =>
              isActive ? 'list-item list-item--active' : 'list-item'
            }>
            <h4 className="list-item__name">{item.name}</h4>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
