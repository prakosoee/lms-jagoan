import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LearningProvider } from './contexts/LearningContext';
import { AdminProvider } from './contexts/AdminContext';
import Navbar from './components/Navbar';
import AdminNavbar from './components/AdminNavbar';
import Home from './pages/Home';
import DigitalAcademy from './pages/DigitalAcademy';
import Backend from './pages/Backend';
import Frontend from './pages/Frontend';
import Contributor from './pages/Contributor';
import OurEcosystem from './pages/OurEcosystem';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import Quiz from './pages/Quiz';
import Certificate from './pages/Certificate';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

function App() {
  const isAdminRoute = window.location.pathname.startsWith('/admin');

  return (
    <AuthProvider>
      <LearningProvider>
        <AdminProvider>
          <Router>
            <div className="min-h-screen bg-white">
              {isAdminRoute ? <AdminNavbar /> : <Navbar />}
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/digital-academy" element={<DigitalAcademy />} />
                <Route path="/digital-academy/backend" element={<Backend />} />
                <Route path="/digital-academy/frontend" element={<Frontend />} />
                <Route path="/contributor" element={<Contributor />} />
                <Route path="/our-ecosystem" element={<OurEcosystem />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Protected User Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/learning/:courseId/:moduleId" element={
                  <ProtectedRoute>
                    <Learning />
                  </ProtectedRoute>
                } />
                <Route path="/quiz/:courseId/:moduleId" element={
                  <ProtectedRoute>
                    <Quiz />
                  </ProtectedRoute>
                } />
                <Route path="/certificate/:courseId" element={
                  <ProtectedRoute>
                    <Certificate />
                  </ProtectedRoute>
                } />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                } />
              </Routes>
              {!isAdminRoute && <Footer />}
            </div>
          </Router>
        </AdminProvider>
      </LearningProvider>
    </AuthProvider>
  );
}

export default App;