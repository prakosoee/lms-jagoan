import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-white">
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default MainLayout;