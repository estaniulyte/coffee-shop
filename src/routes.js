import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Cafes from 'pages/Cafes';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cafes" element={<Cafes />} />
  </Routes>
);

export default Router;
