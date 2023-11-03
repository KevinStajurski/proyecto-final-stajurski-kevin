import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../firebase'

export const zonesApi = createApi({
    reducerPath: 'zonesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getCities: builder.query({
            query: () => 'RF.json',
        }),
        getZonesByCitie: builder.query({
            query: city => `RF.json?orderBy="Ciudad"&equalTo="${city}"`
        }),
        postReform: builder.mutation({
            query: ({ ...reform }) => ({
                url: 'reforms.json',
                method: 'POST',
                body: reform
            })
        }),
        getLastReforms: builder.query({
            query: () => 'reforms.json'
        })
    }),
})

export const {
    useGetCitiesQuery,
    useGetZonesByCitieQuery,
    usePostReformMutation,
    useGetLastReformsQuery
} = zonesApi