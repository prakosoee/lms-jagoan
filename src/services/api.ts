// API Configuration and Base Service
// TODO: Replace with actual API base URL when backend is ready
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// HTTP Methods
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// Base API Service Class
class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  // Generic API request method
  private async request<T>(
    endpoint: string,
    method: HttpMethod = 'GET',
    data?: any,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    try {
      // TODO: Uncomment when API is ready
      /*
      const config: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };

      if (data && method !== 'GET') {
        config.body = JSON.stringify(data);
      }

      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'API request failed');
      }

      return {
        success: true,
        data: result.data || result,
        message: result.message,
      };
      */

      // TEMPORARY: Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Return mock success response for now
      return {
        success: true,
        data: data as T,
        message: 'Operation successful (mock)',
      };
    } catch (error) {
      console.error('API Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // GET request
  async get<T>(endpoint: string, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'GET', undefined, headers);
  }

  // POST request
  async post<T>(endpoint: string, data: any, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'POST', data, headers);
  }

  // PUT request
  async put<T>(endpoint: string, data: any, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'PUT', data, headers);
  }

  // DELETE request
  async delete<T>(endpoint: string, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'DELETE', undefined, headers);
  }

  // Set authorization header
  setAuthToken(token: string) {
    // TODO: Implement token management
    localStorage.setItem('authToken', token);
  }

  // Get authorization header
  getAuthHeaders(): Record<string, string> {
    const token = localStorage.getItem('authToken');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
}

// Create API service instance
export const apiService = new ApiService(API_BASE_URL);