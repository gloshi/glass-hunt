import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  count: 1,
  dinner: null,
  totalPrice: 0,
  firstDate: 0,
  secondDate: 0,
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    open: (state,action) => {
      state.value = action.payload
    },
    decrement: (state) => {
      state.count -= 1
    },
    increment: (state) => {
        state.count += 1
    },
    paramsCard:  (state,action) => {
      state.dinner = action.payload
    },
    price: (state,action) => {
      state.totalPrice = action.payload
    },
    getFirstDate:  (state,action) => {
      state.firstDate = action.payload
    },
    getSecondDate:  (state,action) => {
      state.secondDate = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { open, decrement, increment,paramsCard,price,getFirstDate,getSecondDate } = bookingSlice.actions

export default bookingSlice.reducer