import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './store/AuthContext';
import { LearningProvider } from './store/LearningContext';
import { AdminProvider } from './store/AdminContext';
import AppRoutes from './routes/AppRoutes';
import './styles/globals.css';

function App() {
  return (
    <AuthProvider>
      <LearningProvider>
        <AdminProvider>
          <Router>
            <AppRoutes />
          </Router>
        </AdminProvider>
      </LearningProvider>
    </AuthProvider>
  );
}

export default App;