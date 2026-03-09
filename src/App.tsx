import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// Layouts
import { AppLayout } from './components/layout/AppLayout';
import { WebsiteLayout } from './components/layout/WebsiteLayout';
// Admin Pages
import { Dashboard } from './pages/Dashboard';
import { Bookings } from './pages/Bookings';
import { JobCards } from './pages/JobCards';
import { POS } from './pages/POS';
import { Inventory } from './pages/Inventory';
import { Customers } from './pages/Customers';
import { CustomerProfile } from './pages/CustomerProfile';
import { Vehicles } from './pages/Vehicles';
import { VehicleProfile } from './pages/VehicleProfile';
import { VehicleInspection } from './pages/VehicleInspection';
import { Reports } from './pages/Reports';
import { Payments } from './pages/Payments';
import { Settings } from './pages/Settings';
// Website Pages
import { HomePage } from './pages/website/HomePage';
import { ServicesPage } from './pages/website/ServicesPage';
import { BookingPage } from './pages/website/BookingPage';
import { AboutPage } from './pages/website/AboutPage';
import { ContactPage } from './pages/website/ContactPage';
function RouterContent() {
  const location = useLocation();
  const isWebsite = location.pathname.startsWith('/site');
  if (isWebsite) {
    return (
      <WebsiteLayout>
        <Routes>
          <Route path="/site" element={<HomePage />} />
          <Route path="/site/services" element={<ServicesPage />} />
          <Route path="/site/booking" element={<BookingPage />} />
          <Route path="/site/about" element={<AboutPage />} />
          <Route path="/site/contact" element={<ContactPage />} />
        </Routes>
      </WebsiteLayout>);

  }
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/job-cards" element={<JobCards />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/:id" element={<CustomerProfile />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:id" element={<VehicleProfile />} />
        <Route path="/inspection/:id" element={<VehicleInspection />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppLayout>);

}
export function App() {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>);

}