import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as UserIcon } from 'assets/icons/user.svg';
import { ReactComponent as BasketIcon } from 'assets/icons/shopping.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

import './action-buttons-section.scss';

const ActionButtonsSection = () => {
  const tabItems = [
    {
      name: 'search',
      link: '/search',
      svg: <SearchIcon />,
    },
    {
      name: 'profile',
      link: '/sign-in',
      svg: <UserIcon />,
    },
  ];

  return (
    <nav className="section">
      <ul className="section__list">
        {tabItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) =>
              isActive ? 'list-item item--active' : 'list-item'
            }>
            {item.svg}
          </NavLink>
        ))}
        <button className="list-item button">
          <BasketIcon />
          <span>0</span>
        </button>
      </ul>
    </nav>
  );
};

export default ActionButtonsSection;
