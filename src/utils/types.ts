// Common Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// User Types
export interface User {
  id: string;
  fullName: string;
  email: string;
  username: string;
  phone: string;
  occupation: string;
  organization: string;
  referralSource: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends User {
  avatar?: string;
  bio?: string;
  skills?: string[];
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  fullName: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  occupation: string;
  organization: string;
  referralSource: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

// Learning Types
export interface Module {
  id: string;
  title: string;
  type: 'video' | 'podcast' | 'text';
  content: string;
  duration: string;
  videoUrl?: string;
  audioUrl?: string;
  resources?: Resource[];
  completed: boolean;
  quizPassed: boolean;
  order: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: string;
  image: string;
  instructor: string;
  rating: number;
  students: number;
  modules: Module[];
  progress: number;
  completed: boolean;
  certificateEarned: boolean;
  enrolledAt?: string;
  completedAt?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'link' | 'code' | 'image';
  url: string;
  description?: string;
}

// Quiz Types
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  moduleId: string;
  title: string;
  description?: string;
  questions: QuizQuestion[];
  timeLimit?: number;
  passingScore: number;
  maxAttempts: number;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  userId: string;
  answers: number[];
  score: number;
  passed: boolean;
  startedAt: string;
  completedAt: string;
  timeSpent: number;
}

// Certificate Types
export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  courseName: string;
  userName: string;
  issuedAt: string;
  certificateUrl?: string;
  verificationCode: string;
}

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
  createdAt: string;
  updatedAt: string;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  skills: string[];
  duration: string;
  projects: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  prerequisites?: string[];
  outcomes?: string[];
  createdAt: string;
  updatedAt: string;
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
  lastActivity: string;
  status: 'active' | 'inactive' | 'suspended';
}

// UI Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'tel' | 'select' | 'textarea';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => boolean | string;
  };
}

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
  label: string;
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  hasDropdown?: boolean;
  dropdownItems?: NavItem[];
  requiresAuth?: boolean;
  adminOnly?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

// Notification Types
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  actions?: NotificationAction[];
  createdAt: string;
  read: boolean;
}

export interface NotificationAction {
  label: string;
  action: () => void;
  style?: 'primary' | 'secondary' | 'danger';
}

// Search Types
export interface SearchResult {
  id: string;
  type: 'course' | 'module' | 'contributor' | 'article';
  title: string;
  description: string;
  url: string;
  image?: string;
  relevance: number;
}

export interface SearchFilters {
  type?: string[];
  category?: string[];
  level?: string[];
  duration?: {
    min?: number;
    max?: number;
  };
  price?: {
    min?: number;
    max?: number;
  };
}

// Analytics Types
export interface AnalyticsData {
  totalUsers: number;
  totalCourses: number;
  totalCertificates: number;
  completionRate: number;
  userGrowth: {
    period: string;
    value: number;
    change: number;
  }[];
  popularCourses: {
    id: string;
    title: string;
    enrollments: number;
    completions: number;
  }[];
  userActivity: {
    date: string;
    activeUsers: number;
    newRegistrations: number;
  }[];
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: string;
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

// Theme Types
export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

// Configuration Types
export interface AppConfig {
  name: string;
  description: string;
  version: string;
  api: {
    baseUrl: string;
    timeout: number;
  };
  features: {
    enableNotifications: boolean;
    enableAnalytics: boolean;
    enableChat: boolean;
    enableOfflineMode: boolean;
  };
  ui: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    itemsPerPage: number;
  };
}