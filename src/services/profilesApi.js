import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../firebase'

export const profilesApi = createApi({
    reducerPath: 'profilesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        postProfile: builder.mutation({
            query: ({ ...profile }) => ({
                url: `profiles/${profile.localId}.json`,
                method: 'PUT',
                body: profile
            })
        }),
        getProfile: builder.query({
            query: user => `profiles.json?orderBy="email"&equalTo="${user}"`
        })
    }),
})

export const {
    usePostProfileMutation,
    useGetProfileQuery
} = profilesApi