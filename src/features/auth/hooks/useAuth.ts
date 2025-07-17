import { useState, useEffect } from 'react';
import { authApi, User, LoginRequest, RegisterRequest } from '../api/authApi';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated on app load
    const initializeAuth = async () => {
      try {
        const tokenResponse = await authApi.verifyToken();
        if (tokenResponse.success && tokenResponse.data) {
          const userResponse = await authApi.getCurrentUser();
          if (userResponse.success && userResponse.data) {
            setUser(userResponse.data);
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const credentials: LoginRequest = { email, password };
      const response = await authApi.login(credentials);
      
      if (response.success && response.data) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        return true;
      } else {
        console.error('Login failed:', response.error);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterRequest): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await authApi.register(userData);
      
      if (response.success && response.data) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        return true;
      } else {
        console.error('Registration failed:', response.error);
        return false;
      }
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear local state even if API call fails
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return {
    user,
    login,
    register,
    logout,
    isAuthenticated,
    isLoading
  };
};