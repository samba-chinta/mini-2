import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'authentication slice',
  initialState: {
    isLoggedIn: false,
    email: '',
  },
  reducers: {
    login: (state, payload) => {
      state.isLoggedIn = true;
      state.email = payload.email;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = '';
    }
  }
})

export const userActions = userSlice.actions;
export default userSlice;