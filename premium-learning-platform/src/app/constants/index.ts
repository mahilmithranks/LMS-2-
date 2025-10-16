// Application constants
export const APP_CONFIG = {
  name: 'CodeSphere Academy',
  description: 'Ultimate Learning Platform for Developers',
  version: '1.0.0',
  author: 'CodeSphere Team'
} as const;

export const ROUTES = {
  // Public routes
  HOME: '/',
  CATALOG: '/catalog',
  COURSE_DETAIL: '/courses/:id',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRICING: '/pricing',

  // Auth routes
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',

  // Protected routes
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',

  // Learning routes
  LEARN: '/learn/:courseId/:lessonId',
  PLAYGROUND: '/practice/playground',
  PROJECTS: '/practice/projects',

  // Community routes
  COMMUNITY: '/community',
  DISCUSSIONS: '/community/discussions',
  STUDY_GROUPS: '/community/study-groups',
  EVENTS: '/community/events',

  // Career routes
  CAREER: '/career',
  PORTFOLIO: '/career/portfolio',
  INTERVIEWS: '/career/interviews',
  JOBS: '/career/jobs',

  // Admin routes
  ADMIN: '/admin',
  ADMIN_COURSES: '/admin/courses',
  ADMIN_USERS: '/admin/users',
  ADMIN_ANALYTICS: '/admin/analytics'
} as const;

export const STORAGE_KEYS = {
  TOKEN: 'codesphere_token',
  USER: 'codesphere_user',
  PREFERENCES: 'codesphere_preferences',
  THEME: 'codesphere_theme',
  RECENT_COURSES: 'codesphere_recent_courses',
  PROGRESS: 'codesphere_progress'
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password'
  },
  COURSES: {
    LIST: '/courses',
    DETAIL: '/courses/:id',
    ENROLL: '/courses/:id/enroll',
    PROGRESS: '/courses/:id/progress',
    LESSONS: '/courses/:id/lessons/:lessonId'
  },
  USER: {
    PROFILE: '/user/profile',
    PREFERENCES: '/user/preferences',
    ACHIEVEMENTS: '/user/achievements',
    PROGRESS: '/user/progress'
  },
  COMMUNITY: {
    DISCUSSIONS: '/community/discussions',
    POSTS: '/community/posts',
    GROUPS: '/community/groups'
  }
} as const;

export const DIFFICULTY_LEVELS = {
  BEGINNER: {
    label: 'Beginner',
    color: 'bg-green-100 text-green-800',
    description: 'No prior experience required'
  },
  INTERMEDIATE: {
    label: 'Intermediate',
    color: 'bg-yellow-100 text-yellow-800',
    description: 'Some programming experience helpful'
  },
  ADVANCED: {
    label: 'Advanced',
    color: 'bg-red-100 text-red-800',
    description: 'Strong programming fundamentals required'
  }
} as const;

export const COURSE_CATEGORIES = [
  {
    id: 'web-development',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Frontend and backend web development',
    icon: 'Globe',
    color: '#3b82f6'
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    slug: 'mobile-development',
    description: 'iOS and Android app development',
    icon: 'Smartphone',
    color: '#10b981'
  },
  {
    id: 'data-science',
    name: 'Data Science',
    slug: 'data-science',
    description: 'Machine learning and data analysis',
    icon: 'BarChart3',
    color: '#f59e0b'
  },
  {
    id: 'devops',
    name: 'DevOps',
    slug: 'devops',
    description: 'Deployment and infrastructure',
    icon: 'Server',
    color: '#ef4444'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Security and ethical hacking',
    icon: 'Shield',
    color: '#8b5cf6'
  },
  {
    id: 'game-development',
    name: 'Game Development',
    slug: 'game-development',
    description: 'Game design and development',
    icon: 'Gamepad2',
    color: '#ec4899'
  }
] as const;

export const ACHIEVEMENT_RARITY = {
  COMMON: { color: '#9ca3af', label: 'Common' },
  RARE: { color: '#3b82f6', label: 'Rare' },
  EPIC: { color: '#8b5cf6', label: 'Epic' },
  LEGENDARY: { color: '#f59e0b', label: 'Legendary' }
} as const;

export const XP_VALUES = {
  LESSON_COMPLETION: 50,
  CHALLENGE_COMPLETION: 100,
  PROJECT_COMPLETION: 200,
  QUIZ_PASS: 75,
  DAILY_STREAK: 25,
  COMMUNITY_HELP: 10,
  COURSE_COMPLETION: 500
} as const;

export const BREAKPOINTS = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1600px'
} as const;

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
} as const;

export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 8,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  USERNAME_REGEX: /^[a-zA-Z0-9_]{3,20}$/
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100
} as const;

export const CACHE_TIMES = {
  SHORT: 5 * 60 * 1000, // 5 minutes
  MEDIUM: 30 * 60 * 1000, // 30 minutes
  LONG: 2 * 60 * 60 * 1000, // 2 hours
  VERY_LONG: 24 * 60 * 60 * 1000 // 24 hours
} as const;
