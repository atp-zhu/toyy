import { configureStore } from "@reduxjs/toolkit";
import goodListReducer from './modules/goodListStore'

export default configureStore({
  reducer:{
    goodList:goodListReducer
  }
})
