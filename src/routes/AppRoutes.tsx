import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import AdminRoute from '../components/AdminRoute';

// Public Pages
import Home from '../pages/Home';
import DigitalAcademy from '../pages/DigitalAcademy';
import Backend from '../pages/Backend';
import Frontend from '../pages/Frontend';
import Contributor from '../pages/Contributor';
import OurEcosystem from '../pages/OurEcosystem';

// Auth Pages
import Login from '../features/auth/components/Login';
import Register from '../features/auth/components/Register';
import AdminLogin from '../features/auth/components/AdminLogin';

// User Pages
import Dashboard from '../pages/Dashboard';
import Learning from '../pages/Learning';
import Quiz from '../pages/Quiz';
import Certificate from '../pages/Certificate';

// Admin Pages
import AdminDashboard from '../features/admin/components/AdminDashboard';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route path="digital-academy" element={<DigitalAcademy />} />
        <Route path="digital-academy/backend" element={<Backend />} />
        <Route path="digital-academy/frontend" element={<Frontend />} />
        <Route path="contributor" element={<Contributor />} />
        <Route path="our-ecosystem" element={<OurEcosystem />} />
        
        {/* Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        {/* Protected User Routes */}
        <Route path="dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="learning/:courseId/:moduleId" element={
          <ProtectedRoute>
            <Learning />
          </ProtectedRoute>
        } />
        <Route path="quiz/:courseId/:moduleId" element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        } />
        <Route path="certificate/:courseId" element={
          <ProtectedRoute>
            <Certificate />
          </ProtectedRoute>
        } />

        {/* Admin Routes */}
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin/dashboard" element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        } />
      </Route>
    </Routes>
  );
};

export default AppRoutes;