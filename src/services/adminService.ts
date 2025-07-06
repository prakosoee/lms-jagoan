import { apiService, ApiResponse } from './api';

// Admin Types
export interface Contributor {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
  contributions: string;
  email: string;
  achievements: string[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

export interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  image: string;
  instructor: string;
  description: string;
  modules: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  type: 'video' | 'podcast' | 'text';
  content: string;
  duration: string;
}

export interface Roadmap {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: string[];
  duration: string;
  projects: number;
}

export interface Participant {
  id: string;
  fullName: string;
  email: string;
  username: string;
  phone: string;
  occupation: string;
  organization: string;
  referralSource: string;
  registrationDate: string;
  coursesEnrolled: string[];
  progress: number;
  certificatesEarned: number;
}

// Admin Service Class
class AdminService {
  // Contributors Management
  async getContributors(): Promise<ApiResponse<Contributor[]>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.get<Contributor[]>('/admin/contributors', apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Get from localStorage
      const contributors = JSON.parse(localStorage.getItem('adminContributors') || '[]');
      return {
        success: true,
        data: contributors,
        message: 'Contributors retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get contributors'
      };
    }
  }

  async addContributor(contributor: Omit<Contributor, 'id'>): Promise<ApiResponse<Contributor>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.post<Contributor>('/admin/contributors', contributor, apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Save to localStorage
      const contributors = JSON.parse(localStorage.getItem('adminContributors') || '[]');
      const newContributor = {
        ...contributor,
        id: Date.now().toString()
      };
      contributors.push(newContributor);
      localStorage.setItem('adminContributors', JSON.stringify(contributors));
      
      return {
        success: true,
        data: newContributor,
        message: 'Contributor added successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to add contributor'
      };
    }
  }

  async updateContributor(id: string, contributor: Partial<Contributor>): Promise<ApiResponse<Contributor>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.put<Contributor>(`/admin/contributors/${id}`, contributor, apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Update in localStorage
      const contributors = JSON.parse(localStorage.getItem('adminContributors') || '[]');
      const index = contributors.findIndex((c: Contributor) => c.id === id);
      if (index !== -1) {
        contributors[index] = { ...contributors[index], ...contributor };
        localStorage.setItem('adminContributors', JSON.stringify(contributors));
        
        return {
          success: true,
          data: contributors[index],
          message: 'Contributor updated successfully'
        };
      } else {
        return {
          success: false,
          error: 'Contributor not found'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update contributor'
      };
    }
  }

  async deleteContributor(id: string): Promise<ApiResponse<void>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.delete<void>(`/admin/contributors/${id}`, apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Delete from localStorage
      const contributors = JSON.parse(localStorage.getItem('adminContributors') || '[]');
      const filteredContributors = contributors.filter((c: Contributor) => c.id !== id);
      localStorage.setItem('adminContributors', JSON.stringify(filteredContributors));
      
      return {
        success: true,
        message: 'Contributor deleted successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to delete contributor'
      };
    }
  }

  // Courses Management
  async getCourses(): Promise<ApiResponse<Course[]>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.get<Course[]>('/admin/courses', apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Get from localStorage
      const courses = JSON.parse(localStorage.getItem('adminCourses') || '[]');
      return {
        success: true,
        data: courses,
        message: 'Courses retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get courses'
      };
    }
  }

  async addCourse(course: Omit<Course, 'id'>): Promise<ApiResponse<Course>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.post<Course>('/admin/courses', course, apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Save to localStorage
      const courses = JSON.parse(localStorage.getItem('adminCourses') || '[]');
      const newCourse = {
        ...course,
        id: Date.now().toString()
      };
      courses.push(newCourse);
      localStorage.setItem('adminCourses', JSON.stringify(courses));
      
      return {
        success: true,
        data: newCourse,
        message: 'Course added successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to add course'
      };
    }
  }

  async updateCourse(id: string, course: Partial<Course>): Promise<ApiResponse<Course>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.put<Course>(`/admin/courses/${id}`, course, apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Update in localStorage
      const courses = JSON.parse(localStorage.getItem('adminCourses') || '[]');
      const index = courses.findIndex((c: Course) => c.id === id);
      if (index !== -1) {
        courses[index] = { ...courses[index], ...course };
        localStorage.setItem('adminCourses', JSON.stringify(courses));
        
        return {
          success: true,
          data: courses[index],
          message: 'Course updated successfully'
        };
      } else {
        return {
          success: false,
          error: 'Course not found'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update course'
      };
    }
  }

  async deleteCourse(id: string): Promise<ApiResponse<void>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.delete<void>(`/admin/courses/${id}`, apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Delete from localStorage
      const courses = JSON.parse(localStorage.getItem('adminCourses') || '[]');
      const filteredCourses = courses.filter((c: Course) => c.id !== id);
      localStorage.setItem('adminCourses', JSON.stringify(filteredCourses));
      
      return {
        success: true,
        message: 'Course deleted successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to delete course'
      };
    }
  }

  // Roadmaps Management
  async getRoadmaps(): Promise<ApiResponse<Roadmap[]>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.get<Roadmap[]>('/admin/roadmaps', apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Get from localStorage
      const roadmaps = JSON.parse(localStorage.getItem('adminRoadmaps') || '[]');
      return {
        success: true,
        data: roadmaps,
        message: 'Roadmaps retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get roadmaps'
      };
    }
  }

  async addRoadmap(roadmap: Omit<Roadmap, 'id'>): Promise<ApiResponse<Roadmap>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.post<Roadmap>('/admin/roadmaps', roadmap, apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Save to localStorage
      const roadmaps = JSON.parse(localStorage.getItem('adminRoadmaps') || '[]');
      const newRoadmap = {
        ...roadmap,
        id: Date.now().toString()
      };
      roadmaps.push(newRoadmap);
      localStorage.setItem('adminRoadmaps', JSON.stringify(roadmaps));
      
      return {
        success: true,
        data: newRoadmap,
        message: 'Roadmap added successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to add roadmap'
      };
    }
  }

  async updateRoadmap(id: string, roadmap: Partial<Roadmap>): Promise<ApiResponse<Roadmap>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.put<Roadmap>(`/admin/roadmaps/${id}`, roadmap, apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Update in localStorage
      const roadmaps = JSON.parse(localStorage.getItem('adminRoadmaps') || '[]');
      const index = roadmaps.findIndex((r: Roadmap) => r.id === id);
      if (index !== -1) {
        roadmaps[index] = { ...roadmaps[index], ...roadmap };
        localStorage.setItem('adminRoadmaps', JSON.stringify(roadmaps));
        
        return {
          success: true,
          data: roadmaps[index],
          message: 'Roadmap updated successfully'
        };
      } else {
        return {
          success: false,
          error: 'Roadmap not found'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update roadmap'
      };
    }
  }

  async deleteRoadmap(id: string): Promise<ApiResponse<void>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.delete<void>(`/admin/roadmaps/${id}`, apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Delete from localStorage
      const roadmaps = JSON.parse(localStorage.getItem('adminRoadmaps') || '[]');
      const filteredRoadmaps = roadmaps.filter((r: Roadmap) => r.id !== id);
      localStorage.setItem('adminRoadmaps', JSON.stringify(filteredRoadmaps));
      
      return {
        success: true,
        message: 'Roadmap deleted successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to delete roadmap'
      };
    }
  }

  // Participants Management
  async getParticipants(): Promise<ApiResponse<Participant[]>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.get<Participant[]>('/admin/participants', apiService.getAuthHeaders());
      return response;
      */

      // TEMPORARY: Get from localStorage and process
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const learningProgress = JSON.parse(localStorage.getItem('learningProgress') || '[]');
      
      const participants: Participant[] = users.map((user: any) => {
        const userProgress = learningProgress.find((p: any) => p.userId === user.id) || { courses: [] };
        const coursesEnrolled = userProgress.courses || [];
        const totalProgress = coursesEnrolled.reduce((acc: number, course: any) => acc + (course.progress || 0), 0);
        const avgProgress = coursesEnrolled.length > 0 ? totalProgress / coursesEnrolled.length : 0;
        const certificatesEarned = coursesEnrolled.filter((course: any) => course.certificateEarned).length;

        return {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          username: user.username,
          phone: user.phone || '',
          occupation: user.occupation || '',
          organization: user.organization || '',
          referralSource: user.referralSource || '',
          registrationDate: new Date(parseInt(user.id)).toLocaleDateString(),
          coursesEnrolled: coursesEnrolled.map((c: any) => c.title || c.id),
          progress: Math.round(avgProgress),
          certificatesEarned
        };
      });

      return {
        success: true,
        data: participants,
        message: 'Participants retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get participants'
      };
    }
  }

  // Admin Authentication
  async adminLogin(credentials: { email: string; password: string }): Promise<ApiResponse<{ token: string }>> {
    try {
      // TODO: Replace with actual API call when backend is ready
      /*
      const response = await apiService.post<{ token: string }>('/admin/auth/login', credentials);
      
      if (response.success && response.data) {
        localStorage.setItem('adminAuth', 'true');
        apiService.setAuthToken(response.data.token);
      }
      
      return response;
      */

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
}

// Export admin service instance
export const adminService = new AdminService();