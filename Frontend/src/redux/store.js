import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer,
    auth: authReducer,
  },
});
