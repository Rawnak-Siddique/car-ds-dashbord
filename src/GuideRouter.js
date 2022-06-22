import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InventoryForm from './components/InventoryForm/InventoryForm';
import LeadsForm from './components/LeadsForm/LeadsForm';
import SalesForm from './components/SalesForm/SalesForm';
import VendorsForm from './components/VendorsForm/VendorsForm';
import Customer from './pages/Customer/Customer';
import HomePage from './pages/Home/HomePage';
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
      <Route path='/customer' element={<Customer />} />
      <Route path='/events' element={<h1>events</h1>} />
      <Route path='/inventory-form' element={<InventoryForm />} />
      <Route path='/leads-form' element={<LeadsForm />} />
      <Route path='/sales-form' element={<SalesForm />} />
      <Route path='/vendors-form' element={<VendorsForm />} />
    </Routes>
    
  );
}

export default GuideRouter;
