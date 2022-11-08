import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'authentication slice',
  initialState: {
    isLoggedIn: false,
    token: '',
    id:''
  },
  reducers: {
    login: (state, payload) => {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.id = payload.id;
      window.location.replace("http://localhost:3000/");
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = '';
      state.id = '';
    }
  }
})

export const userActions = userSlice.actions;
export default userSlice;