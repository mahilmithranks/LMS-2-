// Core application types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'student' | 'instructor' | 'admin';
  enrolledCourses: string[];
  completedCourses: string[];
  achievements: Achievement[];
  xp: number;
  level: number;
  streak: number;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  achievements: boolean;
  reminders: boolean;
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'friends';
  showProgress: boolean;
  allowMessages: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: Instructor;
  category: CourseCategory;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  rating: number;
  reviewCount: number;
  price: number;
  currency: string;
  thumbnail: string;
  tags: string[];
  prerequisites: string[];
  learningObjectives: string[];
  sections: CourseSection[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Instructor {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  expertise: string[];
  rating: number;
  courseCount: number;
  studentCount: number;
}

export interface CourseCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export interface CourseSection {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  isLocked: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'article' | 'challenge' | 'project' | 'quiz';
  duration: number;
  content: LessonContent;
  isCompleted: boolean;
  isLocked: boolean;
}

export interface LessonContent {
  videoUrl?: string;
  article?: ArticleContent;
  challenge?: ChallengeContent;
  project?: ProjectContent;
  quiz?: QuizContent;
}

export interface ArticleContent {
  markdown: string;
  codeExamples: CodeExample[];
}

export interface CodeExample {
  language: string;
  code: string;
  title?: string;
}

export interface ChallengeContent {
  description: string;
  starterCode: string;
  language: string;
  tests: TestCase[];
  hints: string[];
}

export interface TestCase {
  input: string;
  expected: string;
  description: string;
}

export interface ProjectContent {
  description: string;
  requirements: string[];
  starterFiles: ProjectFile[];
  solution?: ProjectFile[];
}

export interface ProjectFile {
  name: string;
  content: string;
  language: string;
}

export interface QuizContent {
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'code';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  xpReward: number;
  unlockedAt?: Date;
}

export interface Progress {
  courseId: string;
  lessonId: string;
  completedAt: Date;
  timeSpent: number;
  score?: number;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export interface CourseForm {
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  tags: string[];
  prerequisites: string[];
  learningObjectives: string[];
}

// Component prop types
export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface ComponentWithClassName {
  className?: string;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
