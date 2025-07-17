import { ApiResponse } from '../../../services/api';

// Learning Types
export interface Module {
  id: string;
  title: string;
  type: "video" | "podcast" | "text";
  video?: string;
  audio?: string;
  content: string;
  duration: string;
  completed: boolean;
  quizPassed: boolean;
}

export interface Course {
  id: string;
  title: string;
  level: string;
  modules: Module[];
  progress: number;
  completed: boolean;
  certificateEarned: boolean;
}

export interface Quiz {
  id: string;
  moduleId: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

// Learning API Functions
export const learningApi = {
  // Get user courses
  async getCourses(): Promise<ApiResponse<Course[]>> {
    try {
      // TEMPORARY: Get from localStorage
      const courses = JSON.parse(localStorage.getItem('learningProgress') || '[]');
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
  },

  // Update course progress
  async updateCourseProgress(courseId: string, progress: Partial<Course>): Promise<ApiResponse<Course>> {
    try {
      // TEMPORARY: Update in localStorage
      const courses = JSON.parse(localStorage.getItem('learningProgress') || '[]');
      const index = courses.findIndex((c: Course) => c.id === courseId);
      
      if (index !== -1) {
        courses[index] = { ...courses[index], ...progress };
        localStorage.setItem('learningProgress', JSON.stringify(courses));
        
        return {
          success: true,
          data: courses[index],
          message: 'Course progress updated successfully'
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
        error: error instanceof Error ? error.message : 'Failed to update course progress'
      };
    }
  },

  // Get quiz for module
  async getQuiz(moduleId: string): Promise<ApiResponse<Quiz>> {
    try {
      // TEMPORARY: Mock quiz data
      const quizzes: Quiz[] = [
        {
          id: "intro-backend-quiz",
          moduleId: "intro-backend",
          questions: [
            {
              id: "1",
              question: "What is backend development?",
              options: [
                "Creating user interfaces",
                "Server-side programming and database management",
                "Designing graphics",
                "Writing documentation",
              ],
              correctAnswer: 1,
            },
            // Add more questions...
          ],
        },
        // Add more quizzes...
      ];

      const quiz = quizzes.find(q => q.moduleId === moduleId);
      
      if (quiz) {
        return {
          success: true,
          data: quiz,
          message: 'Quiz retrieved successfully'
        };
      } else {
        return {
          success: false,
          error: 'Quiz not found'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get quiz'
      };
    }
  }
};