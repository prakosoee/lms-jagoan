import React, { createContext, useContext } from 'react';
import { useAdmin as useAdminHook } from '../features/admin/hooks/useAdmin';

const AdminContext = createContext<ReturnType<typeof useAdminHook> | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const admin = useAdminHook();

  return (
    <AdminContext.Provider value={admin}>
      {children}
    </AdminContext.Provider>
  );
};