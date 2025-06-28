import React, { createContext, useContext, useState, useEffect } from "react";

interface Module {
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

interface Course {
  id: string;
  title: string;
  level: string;
  modules: Module[];
  progress: number;
  completed: boolean;
  certificateEarned: boolean;
}

interface Quiz {
  id: string;
  moduleId: string;
  questions: QuizQuestion[];
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface LearningContextType {
  courses: Course[];
  getCurrentCourse: (courseId: string) => Course | undefined;
  getCurrentModule: (courseId: string, moduleId: string) => Module | undefined;
  completeModule: (courseId: string, moduleId: string) => void;
  passQuiz: (courseId: string, moduleId: string) => void;
  getQuiz: (courseId: string, moduleId: string) => Quiz | undefined;
  updateProgress: (courseId: string) => void;
  earnCertificate: (courseId: string) => void;
}

const LearningContext = createContext<LearningContextType | undefined>(
  undefined
);

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (context === undefined) {
    throw new Error("useLearning must be used within a LearningProvider");
  }
  return context;
};

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
          "HTTP (Hypertext Transfer Protocol) adalah protokol yang digunakan untuk mentransfer data di web. Ketika kita membuka halaman web atau mengakses API, browser atau aplikasi mengirimkan permintaan HTTP ke server, yang kemudian mengirimkan respons balik. HTTP memiliki berbagai metode, seperti GET, POST, PUT, dan DELETE, yang masing-masing digunakan untuk tujuan tertentu, seperti mengambil data atau mengirimkan data ke server. REST (Representational State Transfer) adalah arsitektur untuk membangun API yang mengandalkan HTTP. REST API memungkinkan komunikasi antara client dan server dengan menggunakan URL untuk mengidentifikasi sumber daya, dan HTTP untuk melakukan operasi pada sumber daya tersebut. RESTful API sangat populer karena kesederhanaannya dan kemudahan penggunaannya. Dengan menggunakan metode HTTP, REST API memudahkan aplikasi untuk berkomunikasi secara efisien dan aman di web, seperti mengakses data dari server atau mengubahnya.",
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
      {
        id: "2",
        question: "Which of the following is a backend technology?",
        options: ["HTML", "CSS", "Node.js", "React"],
        correctAnswer: 2,
      },
      {
        id: "3",
        question: "What is a commonly used database in backend development?",
        options: ["MongoDB", "SQLite", "MySQL", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: "4",
        question: "Which language is often used for server-side scripting?",
        options: ["JavaScript", "Python", "PHP", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: "5",
        question:
          "Which of the following is responsible for handling requests in backend development?",
        options: ["Web browser", "Database", "Web server", "Frontend"],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "http-rest-quiz",
    moduleId: "http-rest",
    questions: [
      {
        id: "1",
        question: "What does HTTP stand for?",
        options: [
          "HyperText Transfer Protocol",
          "High Tech Transfer Protocol",
          "HyperText Transport Protocol",
          "High Transfer Text Protocol",
        ],
        correctAnswer: 0,
      },
      {
        id: "2",
        question: "Which HTTP method is used to retrieve data?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswer: 2,
      },
      {
        id: "3",
        question: "Which status code indicates successful data creation?",
        options: ["200 OK", "201 Created", "400 Bad Request", "404 Not Found"],
        correctAnswer: 1,
      },
      {
        id: "4",
        question: "Which HTTP method is used to update data?",
        options: ["POST", "PUT", "PATCH", "DELETE"],
        correctAnswer: 1,
      },
      {
        id: "5",
        question:
          "Which of the following is a characteristic of a RESTful API?",
        options: [
          "Uses HTTP methods",
          "Stateless",
          "Uses resources identified by URLs",
          "All of the above",
        ],
        correctAnswer: 3,
      },
    ],
  },
  {
    id: "nodejs-fundamentals-quiz",
    moduleId: "nodejs-fundamentals",
    questions: [
      {
        id: "1",
        question: "What is Node.js?",
        options: [
          "A frontend framework",
          "A JavaScript runtime environment",
          "A database",
          "A CSS preprocessor",
        ],
        correctAnswer: 1,
      },
      {
        id: "2",
        question: "Which of these modules is built into Node.js?",
        options: ["http", "path", "fs", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: "3",
        question:
          "Which tool is commonly used for managing packages in Node.js?",
        options: ["npm", "pip", "composer", "yarn"],
        correctAnswer: 0,
      },
      {
        id: "4",
        question: "Which command is used to install a package in Node.js?",
        options: [
          "npm init",
          "npm install <package_name>",
          "npm create",
          "npm start",
        ],
        correctAnswer: 1,
      },
      {
        id: "5",
        question: "Which of the following is NOT a feature of Node.js?",
        options: [
          "Asynchronous event-driven model",
          "Single-threaded",
          "Multi-threaded",
          "Non-blocking I/O",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "express-framework-quiz",
    moduleId: "express-framework",
    questions: [
      {
        id: "1",
        question: "What is Express.js?",
        options: [
          "A JavaScript library for frontend development",
          "A Node.js web application framework",
          "A database management system",
          "A CSS preprocessor",
        ],
        correctAnswer: 1,
      },
      {
        id: "2",
        question: "Which command is used to create a new Express app?",
        options: [
          "express new",
          "npx create-express-app",
          "express-generator",
          "npm install express",
        ],
        correctAnswer: 2,
      },
      {
        id: "3",
        question: "Which HTTP method is used to delete data?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswer: 3,
      },
      {
        id: "4",
        question: "Which middleware function is used for routing in Express?",
        options: ["app.use()", "app.get()", "express.Router()", "app.set()"],
        correctAnswer: 2,
      },
      {
        id: "5",
        question:
          "Which of the following is a correct Express route definition?",
        options: [
          'app.get("/home", handler)',
          'app.post("/home", handler)',
          'app.use("/home", handler)',
          "All of the above",
        ],
        correctAnswer: 3,
      },
    ],
  },
];

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  useEffect(() => {
    const storedCourses = localStorage.getItem("learningProgress");
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("learningProgress", JSON.stringify(courses));
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

  const getQuiz = (courseId: string, moduleId: string) => {
    return quizzes.find((quiz) => quiz.moduleId === moduleId);
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

  return (
    <LearningContext.Provider
      value={{
        courses,
        getCurrentCourse,
        getCurrentModule,
        completeModule,
        passQuiz,
        getQuiz,
        updateProgress,
        earnCertificate,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};
