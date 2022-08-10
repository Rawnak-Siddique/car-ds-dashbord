import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerForm from './components/CustomerForm/CustomerForm';
import InventoryFormEdit from './components/InventoryFormEdit/InventoryFormEdit';
import InventoryFormV2 from './components/InventoryFormV2/InventoryFormV2';
import LeadsForm from './components/LeadsForm/LeadsForm';
import Review from './components/Review/Review';
import SalesForm from './components/SalesForm/SalesForm';
import VendorsForm from './components/VendorsForm/VendorsForm';
import Bookings from './pages/Bookings/Bookings';
import CalenderEvents from './pages/CalenderEvents/CalenderEvents';
import Customer from './pages/Customer/Customer';
import HomePage from './pages/Home/HomePage';
import Inventory from './pages/Inventory/Inventory';
import Leads from './pages/Leads/Leads';
import PasswordChange from './pages/PasswordChange/PasswordChange';
import Repairs from './pages/Repairs/Repairs';
import Sales from './pages/Sales/Sales';
import Settings from './pages/Settings/Settings';
import Vendors from './pages/Vendors/Vendors';

const GuideRouter = () => {
  return (
   /* A router that will render the components when the path is the same as the path in the route. */
          <Routes>
            {/* Rendering the HomePage component when the path is '/' */}
            <Route path='/' element={<HomePage/>} />
            { /* Rendering the Inventory component when the path is '/inventory' */}
            <Route path='/inventory' element={<Inventory />} />
            {/* Rendering the Repairs component when the path is '/repairs' */}
            <Route path='/repairs' element={<Repairs />} />
            {/* Rendering the Sales component when the path is '/sales' */}
            <Route path='/sales' element={<Sales />} />
            {/* Rendering the Vendors component when the path is '/vendors' */}
            <Route path='/vendors' element={<Vendors />} />
            {/* Rendering the Leads component when the path is '/leads' */}
            <Route path='/leads' element={<Leads />} />
            {/* Rendering the Customer component when the path is '/customer' */}
            <Route path='/customer' element={<Customer />} />
            { /* This is a route that will render the `Bookings` component when the path is `/Bookings`. */}
            <Route path='/Bookings' element={<Bookings/>} />
            {/* This is a route that will render the `h1` element with the text `events` when the path is
            `/events`. */}
            <Route path='/events' element={<CalenderEvents/>} />
            { /* This is a route that will render the `InventoryFormEdit` component when the path is
            `/inventory-form/edit/:id`. */}
            <Route path='/inventory-form/edit/:id' element={<InventoryFormEdit />} />
            {/* This is a route that will render the `InventoryFormV2` component when the path is
            `/inventory-form`. */}
            <Route path='/inventory-form' element={<InventoryFormV2 />} />
            {/* This is a route that will render the `LeadsForm` component when the path is `/leads-form`. */}
            <Route path='/leads-form' element={<LeadsForm />} />
            {/* This is a route that will render the `SalesForm` component when the path is `/sales-form`. */}
            <Route path='/sales-form' element={<SalesForm />} />
            {/* This is a route that will render the `VendorsForm` component when the path is `/vendors-form`. */}
            <Route path='/vendors-form' element={<VendorsForm />} />
            {/* This is a route that will render the `Review` component when the path is `/reviews-form`. */}
            <Route path='/reviews/:id' element={<Review/>} />
            {/* This is a route that will render the `CustomerForm` component when the path is
            `/add-customer`. */}
            <Route path='/add-customer' element={<CustomerForm/>} />
            {/* This is a route that will render the `LogIn` component when the path is `/logout`. */}
            <Route path='/settings' element={<Settings/>} />
            <Route path='/change-pass' element={<PasswordChange/>} />
          </Routes>
  )
}

export default GuideRouter;
