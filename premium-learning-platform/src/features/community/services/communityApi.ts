import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse, PaginatedResponse } from '@/app/types';

interface Discussion {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  upvotes: number;
  replyCount: number;
  isResolved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface DiscussionReply {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  isAccepted: boolean;
  createdAt: Date;
}

interface StudyGroup {
  id: string;
  name: string;
  description: string;
  members: Array<{
    id: string;
    name: string;
    avatar?: string;
    role: 'admin' | 'member';
  }>;
  maxMembers: number;
  course?: string;
  meetingSchedule?: string;
  isActive: boolean;
  createdAt: Date;
}

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

export const communityApi = createApi({
  reducerPath: 'communityApi',
  baseQuery,
  tagTypes: ['Discussion', 'StudyGroup'],
  endpoints: (builder) => ({
    getDiscussions: builder.query<
      PaginatedResponse<Discussion>,
      {
        page?: number;
        limit?: number;
        category?: string;
        sortBy?: 'recent' | 'popular' | 'unresolved';
      }
    >({
      query: (params) => ({
        url: '/community/discussions',
        params,
      }),
      providesTags: ['Discussion'],
    }),

    getDiscussion: builder.query<ApiResponse<Discussion & { replies: DiscussionReply[] }>, string>({
      query: (id) => `/community/discussions/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Discussion', id }],
    }),

    createDiscussion: builder.mutation<
      ApiResponse<Discussion>,
      {
        title: string;
        content: string;
        category: string;
        tags?: string[];
      }
    >({
      query: (data) => ({
        url: '/community/discussions',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Discussion'],
    }),

    replyToDiscussion: builder.mutation<
      ApiResponse<DiscussionReply>,
      {
        discussionId: string;
        content: string;
      }
    >({
      query: ({ discussionId, content }) => ({
        url: `/community/discussions/${discussionId}/replies`,
        method: 'POST',
        body: { content },
      }),
      invalidatesTags: (_result, _error, { discussionId }) => [
        { type: 'Discussion', id: discussionId },
      ],
    }),

    upvoteDiscussion: builder.mutation<ApiResponse<void>, string>({
      query: (discussionId) => ({
        url: `/community/discussions/${discussionId}/upvote`,
        method: 'POST',
      }),
      invalidatesTags: (_result, _error, discussionId) => [
        { type: 'Discussion', id: discussionId },
      ],
    }),

    markDiscussionResolved: builder.mutation<ApiResponse<void>, string>({
      query: (discussionId) => ({
        url: `/community/discussions/${discussionId}/resolve`,
        method: 'POST',
      }),
      invalidatesTags: (_result, _error, discussionId) => [
        { type: 'Discussion', id: discussionId },
      ],
    }),

    getStudyGroups: builder.query<PaginatedResponse<StudyGroup>, {
      page?: number;
      limit?: number;
      course?: string;
    }>({
      query: (params) => ({
        url: '/community/study-groups',
        params,
      }),
      providesTags: ['StudyGroup'],
    }),

    getStudyGroup: builder.query<ApiResponse<StudyGroup>, string>({
      query: (id) => `/community/study-groups/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'StudyGroup', id }],
    }),

    createStudyGroup: builder.mutation<
      ApiResponse<StudyGroup>,
      {
        name: string;
        description: string;
        maxMembers: number;
        course?: string;
        meetingSchedule?: string;
      }
    >({
      query: (data) => ({
        url: '/community/study-groups',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['StudyGroup'],
    }),

    joinStudyGroup: builder.mutation<ApiResponse<void>, string>({
      query: (groupId) => ({
        url: `/community/study-groups/${groupId}/join`,
        method: 'POST',
      }),
      invalidatesTags: (_result, _error, groupId) => [
        { type: 'StudyGroup', id: groupId },
      ],
    }),

    leaveStudyGroup: builder.mutation<ApiResponse<void>, string>({
      query: (groupId) => ({
        url: `/community/study-groups/${groupId}/leave`,
        method: 'POST',
      }),
      invalidatesTags: (_result, _error, groupId) => [
        { type: 'StudyGroup', id: groupId },
      ],
    }),
  }),
});

export const {
  useGetDiscussionsQuery,
  useGetDiscussionQuery,
  useCreateDiscussionMutation,
  useReplyToDiscussionMutation,
  useUpvoteDiscussionMutation,
  useMarkDiscussionResolvedMutation,
  useGetStudyGroupsQuery,
  useGetStudyGroupQuery,
  useCreateStudyGroupMutation,
  useJoinStudyGroupMutation,
  useLeaveStudyGroupMutation,
} = communityApi;
