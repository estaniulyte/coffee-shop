import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

import './comercial-card.scss';

const ComercialCard = ({ heading, description, color, children }) => {
  return (
    <article className="carde">
      <h1 className="carde__heading">{heading}</h1>
      <p className="carde__description">{description}</p>
      <div>{children}</div>
    </article>
  );
};

ComercialCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default ComercialCard;
