import { configureStore } from '@reduxjs/toolkit'

import { trainersReducer } from './features/trainers/trainersSlice';
import { shopReducer } from './features/shop/shopSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
        trainers: trainersReducer,
        shop: shopReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
