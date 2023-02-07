import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    visible: false
  },
  reducers: {
    toggle: state => {
      state.visible = !state.visible
    }
  }
})

export const { toggle } = menuSlice.actions

export default menuSlice.reducer