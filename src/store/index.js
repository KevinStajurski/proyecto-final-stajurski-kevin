import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { zonesApi } from '../services/zonesApi'
import { authApi } from '../services/authApi'
import authSlice from '../features/auth/authSlice'
import { profilesApi } from '../services/profilesApi'

const store = configureStore({
    reducer: {
        auth: authSlice,
        [zonesApi.reducerPath]: zonesApi.reducer,
        [profilesApi.reducerPath]: profilesApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(zonesApi.middleware, profilesApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch)

export default store