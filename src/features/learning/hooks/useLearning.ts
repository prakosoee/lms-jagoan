import { useState, useEffect } from 'react';
import { learningApi, Course, Module, Quiz } from '../api/learningApi';

// Initial courses data
const initialCourses: Course[] = [
  {
    id: "backend-beginner",
    title: "Backend Development - Beginner",
    level: "Beginner",
    progress: 0,
    completed: false,
    certificateEarned: false,
    modules: [
      {
        id: "intro-backend",
        title: "Introduction to Backend Development",
        type: "video",
        video: "/video/video.mp4",
        content:
          "Learn the fundamentals of backend development, server-side programming, and how backend systems work.",
        duration: "45 min",
        completed: false,
        quizPassed: false,
      },
      {
        id: "http-rest",
        title: "HTTP & REST API Basics",
        type: "text",
        content:
          "HTTP (Hypertext Transfer Protocol) adalah protokol yang digunakan untuk mentransfer data di web...",
        duration: "30 min",
        completed: false,
        quizPassed: false,
      },
      {
        id: "nodejs-fundamentals",
        title: "Node.js Fundamentals",
        type: "video",
        content:
          "Introduction to Node.js runtime, event loop, modules, and building your first Node.js application.",
        duration: "60 min",
        completed: false,
        quizPassed: false,
      },
      {
        id: "express-framework",
        title: "Express.js Framework",
        type: "podcast",
        content:
          "Learn Express.js framework for building web applications and APIs with Node.js.",
        duration: "40 min",
        completed: false,
        quizPassed: false,
      },
    ],
  },
];

export const useLearning = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const initializeLearning = async () => {
      const response = await learningApi.getCourses();
      if (response.success && response.data && response.data.length > 0) {
        setCourses(response.data);
      } else {
        // Initialize with default courses
        setCourses(initialCourses);
        localStorage.setItem('learningProgress', JSON.stringify(initialCourses));
      }
    };

    initializeLearning();
  }, []);

  useEffect(() => {
    localStorage.setItem('learningProgress', JSON.stringify(courses));
  }, [courses]);

  const getCurrentCourse = (courseId: string) => {
    return courses.find((course) => course.id === courseId);
  };

  const getCurrentModule = (courseId: string, moduleId: string) => {
    const course = getCurrentCourse(courseId);
    return course?.modules.find((module) => module.id === moduleId);
  };

  const completeModule = (courseId: string, moduleId: string) => {
    setCourses((prev) =>
      prev.map((course) => {
        if (course.id === courseId) {
          const updatedModules = course.modules.map((module) => {
            if (module.id === moduleId) {
              return { ...module, completed: true };
            }
            return module;
          });
          return { ...course, modules: updatedModules };
        }
        return course;
      })
    );
  };

  const passQuiz = (courseId: string, moduleId: string) => {
    setCourses((prev) =>
      prev.map((course) => {
        if (course.id === courseId) {
          const updatedModules = course.modules.map((module) => {
            if (module.id === moduleId) {
              return { ...module, quizPassed: true };
            }
            return module;
          });
          return { ...course, modules: updatedModules };
        }
        return course;
      })
    );
    updateProgress(courseId);
  };

  const getQuiz = async (courseId: string, moduleId: string): Promise<Quiz | undefined> => {
    const response = await learningApi.getQuiz(moduleId);
    return response.success ? response.data : undefined;
  };

  const updateProgress = (courseId: string) => {
    setCourses((prev) =>
      prev.map((course) => {
        if (course.id === courseId) {
          const completedModules = course.modules.filter(
            (module) => module.completed && module.quizPassed
          ).length;
          const progress = (completedModules / course.modules.length) * 100;
          const completed = progress === 100;
          return { ...course, progress, completed };
        }
        return course;
      })
    );
  };

  const earnCertificate = (courseId: string) => {
    setCourses((prev) =>
      prev.map((course) => {
        if (course.id === courseId) {
          return { ...course, certificateEarned: true };
        }
        return course;
      })
    );
  };

  return {
    courses,
    getCurrentCourse,
    getCurrentModule,
    completeModule,
    passQuiz,
    getQuiz,
    updateProgress,
    earnCertificate,
  };
};