import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { env } from '@/helpers/env';

export const apiSlice = createApi({
  reducerPath: 'posts-api',
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiBaseUrl,
  }),
  endpoints: builder => ({
    retrieveListOfPosts: builder.query({
      query: () => '/posts/all',
    }),
  }),
});
