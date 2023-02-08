import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    visible: false
  },
  reducers: {
    toggleMenuVisible: state => {
      state.visible = !state.visible
    },
    setMenuVisible: (state, action) => {
      state.visible = action.payload
    }
  }
})

export const { toggleMenuVisible, setMenuVisible } = menuSlice.actions

export default menuSlice.reducer