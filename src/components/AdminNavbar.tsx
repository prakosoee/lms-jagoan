import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, LogOut, Menu, X, Settings, User } from 'lucide-react';

const AdminNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  return (
    <nav className="bg-gradient-to-r from-red-600 to-orange-600 border-b border-red-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/admin/dashboard" className="flex items-center space-x-2 group">
            <div className="p-2 bg-white bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all duration-300">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              JagoCoding Admin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/admin/dashboard"
              className="flex items-center space-x-2 px-3 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200"
            >
              <Settings className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            
            <div className="flex items-center space-x-2 px-3 py-2 text-white">
              <User className="h-4 w-4" />
              <span>Admin User</span>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-3 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-700">
            <div className="space-y-2">
              <Link
                to="/admin/dashboard"
                className="flex items-center space-x-2 w-full px-3 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Settings className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              
              <div className="flex items-center space-x-2 px-3 py-2 text-white">
                <User className="h-4 w-4" />
                <span>Admin User</span>
              </div>

              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-3 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;