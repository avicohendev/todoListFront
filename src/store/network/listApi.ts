import { createApi ,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { listNames } from '../../types/listTypes';
//import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import {RootState} from '../store'

// Define a service using a base URL and expected endpoints
export const listApi = createApi({
    reducerPath: 'listApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/list/', prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).userData.idToken
    
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
    
        return headers
      }, }, ),
    
    endpoints: (builder) => ({
      getListsOfUser: builder.query<listNames[], string>({
        query: (name) => `names/${name}`,
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetListsOfUserQuery } = listApi