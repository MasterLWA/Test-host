import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from '../Pages/Loging';
import Dashbord from '../Pages/Dashbord';
import Billing from '../Pages/UserSide/Billing';
import Grn from '../Pages/UserSide/Grn';
import Editsupplier from '../Pages/UserSide/Editsupplier';
import Editgrn from '../Pages/UserSide/Editgrn';
import Mrn from '../Pages/UserSide/Mrn';
import Supplier from '../Pages/UserSide/Supplier';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashbord" element={<Dashbord />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/Grn" element={<Grn />} />
        <Route path="/Editgrn/:id" element={<Editgrn />} />
        <Route path="/Mrn" element={<Mrn />} />
        <Route path="/Suppliers" element={<Supplier />} />
        <Route path="/Suppliers/:id" element={<Editsupplier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
