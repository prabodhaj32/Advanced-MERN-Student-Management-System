import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    loading: false,
    error: null,
  },
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setStudents, setLoading, setError } = studentSlice.actions;

export default studentSlice.reducer;
