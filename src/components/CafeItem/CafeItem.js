import React from 'react';

import './cafe-item.scss';

const CafeItem = () => {
  return (
    <div className="cafe-container">
      <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
      <h3 className="cafe-title">Cafe Title</h3>
    </div>
  );
};

export default CafeItem;
