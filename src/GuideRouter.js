import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Inventory from './pages/Inventory/Inventory';

const GuideRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/repairs' element={<h1>repairs</h1>} />
      <Route path='/sales' element={<h1>sales</h1>} />
      <Route path='/events' element={<h1>events</h1>} />
      <Route path='/leads' element={<h1>leads</h1>} />
      <Route path='/deals' element={<h1>deals</h1>} />
      <Route path='/vendors' element={<h1>vendors</h1>} />
    </Routes>
    
  );
}

export default GuideRouter;
