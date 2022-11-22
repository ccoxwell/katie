import { configureStore } from '@reduxjs/toolkit'
import starredReducer from './starredSlice'

export default configureStore({
  reducer: {
    starred: starredReducer
  }
})