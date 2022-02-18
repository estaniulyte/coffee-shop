import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './comercial-card.scss';

const ComercialCard = ({ heading, description, theme = 'light', children }) => {
  return (
    <article
      className={classNames('card', {
        [`card--${theme}`]: true,
      })}>
      <h1 className="card__heading">{heading}</h1>
      <p className="card__description">{description}</p>
      <div>{children}</div>
    </article>
  );
};

const themes = ['light', 'dark'];

ComercialCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(themes),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default ComercialCard;
