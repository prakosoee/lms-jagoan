import { apiService, ApiResponse } from '../../../services/api';

// Auth Types
export interface User {
  id: string;
  fullName: string;
  email: string;
  username: string;
  phone: string;
  occupation: string;
  organization: string;
  referralSource: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  occupation: string;
  organization: string;
  referralSource: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

// Auth API Functions
export const authApi = {
  // Login user
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    try {
      // TEMPORARY: Mock implementation using localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const foundUser = users.find((u: any) => 
        u.email === credentials.email && u.password === credentials.password
      );
      
      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        const mockToken = `mock_token_${Date.now()}`;
        
        // Store auth token and user data
        apiService.setAuthToken(mockToken);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        
        return {
          success: true,
          data: {
            user: userWithoutPassword,
            token: mockToken
          },
          message: 'Login successful'
        };
      } else {
        return {
          success: false,
          error: 'Invalid email or password'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Login failed'
      };
    }
  },

  // Register user
  async register(userData: RegisterRequest): Promise<ApiResponse<LoginResponse>> {
    try {
      // TEMPORARY: Mock implementation using localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find((u: any) => 
        u.email === userData.email || u.username === userData.username
      );
      
      if (existingUser) {
        return {
          success: false,
          error: 'Email or username already exists'
        };
      }

      const newUser = {
        id: Date.now().toString(),
        ...userData
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      const { password: _, ...userWithoutPassword } = newUser;
      const mockToken = `mock_token_${Date.now()}`;
      
      // Store auth token and user data
      apiService.setAuthToken(mockToken);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      return {
        success: true,
        data: {
          user: userWithoutPassword,
          token: mockToken
        },
        message: 'Registration successful'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Registration failed'
      };
    }
  },

  // Logout user
  async logout(): Promise<ApiResponse<void>> {
    try {
      // Clear local storage
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      
      return {
        success: true,
        message: 'Logout successful'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Logout failed'
      };
    }
  },

  // Get current user
  async getCurrentUser(): Promise<ApiResponse<User>> {
    try {
      // TEMPORARY: Get from localStorage
      const userData = localStorage.getItem('user');
      if (userData) {
        return {
          success: true,
          data: JSON.parse(userData),
          message: 'User data retrieved'
        };
      } else {
        return {
          success: false,
          error: 'No user data found'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get user data'
      };
    }
  },

  // Verify token
  async verifyToken(): Promise<ApiResponse<boolean>> {
    try {
      // TEMPORARY: Check if token exists in localStorage
      const token = localStorage.getItem('authToken');
      return {
        success: true,
        data: !!token,
        message: token ? 'Token valid' : 'No token found'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Token verification failed'
      };
    }
  },

  // Admin login
  async adminLogin(credentials: { email: string; password: string }): Promise<ApiResponse<{ token: string }>> {
    try {
      // TEMPORARY: Mock admin authentication
      const ADMIN_CREDENTIALS = {
        email: 'admin@jagocoding.com',
        password: 'admin123'
      };

      if (credentials.email === ADMIN_CREDENTIALS.email && credentials.password === ADMIN_CREDENTIALS.password) {
        const mockToken = `admin_token_${Date.now()}`;
        localStorage.setItem('adminAuth', 'true');
        apiService.setAuthToken(mockToken);
        
        return {
          success: true,
          data: { token: mockToken },
          message: 'Admin login successful'
        };
      } else {
        return {
          success: false,
          error: 'Invalid admin credentials'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Admin login failed'
      };
    }
  }
};