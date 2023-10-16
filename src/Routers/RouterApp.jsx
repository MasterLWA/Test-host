import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from '../Pages/Loging';

import Dashbord from '../Pages/Dashbord';

import Billing from '../Pages/UserSide/Billing'
import Grn from '../Pages/UserSide/Grn'
import Editsupplier from '../Pages/UserSide/Editsupplier';
import Editgrn from '../Pages/UserSide/Editgrn';
import Mrn from '../Pages/UserSide/Mrn'
import Supplier from '../Pages/UserSide/Supplier'



/**
 * Renders the application router with different routes for different pages.
 * @returns {JSX.Element} The router component with different routes.
 */
const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />

        <Route path="/dashboard" element={<Dashbord />} />

        <Route path="/billing" element={<Billing />} />

        <Route path="/grn" element={<Grn />} />
        <Route path="/editgrn/:id" element={<Editgrn />} />

        <Route path="/mrn" element={<Mrn />} />

        <Route path="/suppliers" element={<Supplier />} />
        <Route path="/suppliers/:id" element={<Editsupplier />} />


      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
