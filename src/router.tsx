import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FounderRitik from './pages/FounderRitik';
import FounderSachin from './pages/FounderSachin';
import Services from './pages/Services';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Router(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder/ritik" element={<FounderRitik />} />
        <Route path="/founder/sachin" element={<FounderSachin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
