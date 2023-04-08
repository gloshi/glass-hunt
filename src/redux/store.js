import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from './booking/bookingSlice'

export const store = configureStore({
  reducer: {
    booking: bookingSlice
  },
})