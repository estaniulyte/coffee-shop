import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

const ComercialCard = ({ heading, description, color, children }) => {
  return (
    <article>
      <h1>{heading}</h1>
      <p>{description}</p>
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
