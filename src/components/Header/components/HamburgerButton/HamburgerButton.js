import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './hamburger-button.scss';

const HamburgerButton = ({ isActive = false }) => {
  return (
    <div
      className={classNames('hamburger-icon', {
        'hamburger-icon--active': isActive,
      })}>
      <div />
    </div>
  );
};

HamburgerButton.propTypes = {
  isActive: PropTypes.bool,
};

export default HamburgerButton;
