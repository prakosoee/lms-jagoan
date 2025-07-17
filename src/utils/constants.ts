// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3001/api',
  TIMEOUT: 10000,
};

// App Configuration
export const APP_CONFIG = {
  NAME: 'JagoCoding',
  DESCRIPTION: 'Platform pembelajaran online terdepan untuk developer Indonesia',
  VERSION: '1.0.0',
};

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  DIGITAL_ACADEMY: '/digital-academy',
  BACKEND: '/digital-academy/backend',
  FRONTEND: '/digital-academy/frontend',
  CONTRIBUTOR: '/contributor',
  OUR_ECOSYSTEM: '/our-ecosystem',
  LEARNING: '/learning/:courseId/:moduleId',
  QUIZ: '/quiz/:courseId/:moduleId',
  CERTIFICATE: '/certificate/:courseId',
  ADMIN_LOGIN: '/admin/login',
  ADMIN_DASHBOARD: '/admin/dashboard',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER: 'user',
  ADMIN_AUTH: 'adminAuth',
  USERS: 'users',
  LEARNING_PROGRESS: 'learningProgress',
  ADMIN_CONTRIBUTORS: 'adminContributors',
  ADMIN_COURSES: 'adminCourses',
  ADMIN_ROADMAPS: 'adminRoadmaps',
};

// UI Constants
export const UI_CONFIG = {
  ANIMATION_DURATION: 200,
  DEBOUNCE_DELAY: 300,
  ITEMS_PER_PAGE: 10,
};

// Course Levels
export const COURSE_LEVELS = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
} as const;

// Course Categories
export const COURSE_CATEGORIES = {
  FRONTEND: 'Frontend',
  BACKEND: 'Backend',
  FULL_STACK: 'Full Stack',
  MOBILE: 'Mobile',
  DATABASE: 'Database',
  DEVOPS: 'DevOps',
} as const;

// Module Types
export const MODULE_TYPES = {
  VIDEO: 'video',
  PODCAST: 'podcast',
  TEXT: 'text',
} as const;

// Quiz Configuration
export const QUIZ_CONFIG = {
  PASSING_SCORE: 80,
  MAX_ATTEMPTS: 3,
  TIME_LIMIT: 30, // minutes
};

// Validation Rules
export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 6,
  USERNAME_MIN_LENGTH: 3,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^(\+62|62|0)[0-9]{9,13}$/,
};

// Error Messages
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'Field ini wajib diisi',
  INVALID_EMAIL: 'Format email tidak valid',
  INVALID_PHONE: 'Format nomor telepon tidak valid',
  PASSWORD_TOO_SHORT: `Password minimal ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} karakter`,
  USERNAME_TOO_SHORT: `Username minimal ${VALIDATION_RULES.USERNAME_MIN_LENGTH} karakter`,
  LOGIN_FAILED: 'Email atau password salah',
  REGISTRATION_FAILED: 'Email atau username sudah digunakan',
  NETWORK_ERROR: 'Terjadi kesalahan jaringan. Silakan coba lagi.',
  GENERIC_ERROR: 'Terjadi kesalahan. Silakan coba lagi.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login berhasil',
  REGISTRATION_SUCCESS: 'Registrasi berhasil',
  LOGOUT_SUCCESS: 'Logout berhasil',
  PROFILE_UPDATED: 'Profil berhasil diperbarui',
  COURSE_COMPLETED: 'Course berhasil diselesaikan',
  QUIZ_PASSED: 'Quiz berhasil diselesaikan',
  CERTIFICATE_EARNED: 'Sertifikat berhasil diperoleh',
};