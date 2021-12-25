import { configureStore } from '@reduxjs/toolkit'
import {userDataReducer} from './slices/userDataSlice'
import { listApi } from './network/listApi'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: {userData: userDataReducer, [listApi.reducerPath]: listApi.reducer},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(listApi.middleware),
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch