import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Inventory from './pages/Inventory/Inventory';
import Leads from './pages/Leads/Leads';
import Repairs from './pages/Repairs/Repairs';
import Sales from './pages/Sales/Sales';
import Vendors from './pages/Vendors/Vendors';

const GuideRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/repairs' element={<Repairs />} />
      <Route path='/sales' element={<Sales />} />
      <Route path='/vendors' element={<Vendors />} />
      <Route path='/leads' element={<Leads />} />
      <Route path='/events' element={<h1>events</h1>} />
      <Route path='/deals' element={<h1>deals</h1>} />
    </Routes>
    
  );
}

export default GuideRouter;
