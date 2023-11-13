import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userImg: '/vite.svg',
  userName: '',  
  userEmail: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateImg: (state, action) => {
      state.userImg = action.payload
    },
    updateName: (state, action) => {
      state.userName = action.payload
    },
    updateEmail: (state, action) => {
      state.userEmail = action.payload
    },
  },
})

export const { updateName, updateImg, updateEmail } = userSlice.actions

export default userSlice.reducer