import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './store/filterSlice'
import jobReducer from './store/jobSlice'
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    jobs: jobReducer,
  },
})

