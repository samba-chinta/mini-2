import { createSlice } from '@reduxjs/toolkit';

const portalSlice = createSlice({
  name: 'portal slice',
  initialState: {
    isActive: false,
  },
  reducers: {
    setActive: (state) => {
      state.isActive = !state.isActive;
    }
  }
})

export const portalActions = portalSlice.actions;
export default portalSlice;