import { createSlice } from '@reduxjs/toolkit'

export const starredSlice = createSlice({
  name: 'starred',
  initialState: {
    value: []
  },
  reducers: {
    addStarred: (state, action) => {
        state.value = [...state.value, action.payload]
        console.log('state', state)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addStarred } = starredSlice.actions

export default starredSlice.reducer