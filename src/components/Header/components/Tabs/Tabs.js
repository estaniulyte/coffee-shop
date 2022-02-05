import React from 'react';
import { NavLink } from 'react-router-dom';

import './tabs.scss';

const Tabs = () => {
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
    <nav className="tabs">
      <ul className="tabs__list">
        {tabItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) =>
              isActive ? 'item item--active' : 'item'
            }>
            <h4 className="item__name">{item.name}</h4>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
