import React, { createContext, useContext } from 'react';
import { useAuth as useAuthHook } from '../features/auth/hooks/useAuth';

const AuthContext = createContext<ReturnType<typeof useAuthHook> | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuthHook();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};