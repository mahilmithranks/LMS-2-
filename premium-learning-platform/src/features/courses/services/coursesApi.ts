import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Course, Progress, PaginatedResponse, ApiResponse } from '@/app/types';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('codesphere_token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery,
  tagTypes: ['Course', 'Progress'],
  endpoints: (builder) => ({
    getCourses: builder.query<
      PaginatedResponse<Course>,
      {
        page?: number;
        limit?: number;
        category?: string;
        difficulty?: string;
        search?: string;
      }
    >({
      query: (params) => ({
        url: '/courses',
        params,
      }),
      providesTags: ['Course'],
    }),

    getCourse: builder.query<ApiResponse<Course>, string>({
      query: (id) => `/courses/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Course', id }],
    }),

    enrollInCourse: builder.mutation<ApiResponse<void>, string>({
      query: (courseId) => ({
        url: `/courses/${courseId}/enroll`,
        method: 'POST',
      }),
      invalidatesTags: (_result, _error, courseId) => [
        { type: 'Course', id: courseId },
        'Course',
      ],
    }),

    getCourseProgress: builder.query<ApiResponse<Progress[]>, string>({
      query: (courseId) => `/courses/${courseId}/progress`,
      providesTags: (_result, _error, courseId) => [
        { type: 'Progress', id: courseId },
      ],
    }),

    updateLessonProgress: builder.mutation<
      ApiResponse<Progress>,
      { courseId: string; lessonId: string; progress: Partial<Progress> }
    >({
      query: ({ courseId, lessonId, progress }) => ({
        url: `/courses/${courseId}/lessons/${lessonId}/progress`,
        method: 'POST',
        body: progress,
      }),
      invalidatesTags: (_result, _error, { courseId }) => [
        { type: 'Progress', id: courseId },
      ],
    }),

    getLesson: builder.query<
      ApiResponse<any>,
      { courseId: string; lessonId: string }
    >({
      query: ({ courseId, lessonId }) => `/courses/${courseId}/lessons/${lessonId}`,
    }),

    submitChallenge: builder.mutation<
      ApiResponse<{ passed: boolean; feedback: string }>,
      {
        courseId: string;
        lessonId: string;
        code: string;
        language: string;
      }
    >({
      query: ({ courseId, lessonId, code, language }) => ({
        url: `/courses/${courseId}/lessons/${lessonId}/submit`,
        method: 'POST',
        body: { code, language },
      }),
    }),

    getRecommendedCourses: builder.query<ApiResponse<Course[]>, void>({
      query: () => '/courses/recommended',
    }),

    searchCourses: builder.query<ApiResponse<Course[]>, string>({
      query: (searchTerm) => `/courses/search?q=${encodeURIComponent(searchTerm)}`,
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseQuery,
  useEnrollInCourseMutation,
  useGetCourseProgressQuery,
  useUpdateLessonProgressMutation,
  useGetLessonQuery,
  useSubmitChallengeMutation,
  useGetRecommendedCoursesQuery,
  useSearchCoursesQuery,
} = coursesApi;
