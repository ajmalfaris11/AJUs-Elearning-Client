import {apiSlice} from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    updateAvatar: builder.mutation({
      query: (avatar: string) => ({
        url: 'update-user-avatar',
        method: 'PUT',
        body: { avatar },
        credentials: 'include' as const,
      }),
    }),
  }),
});

export const { useUpdateAvatarMutation } = userApi;