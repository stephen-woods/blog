import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "./reducers/menu-list"

export default configureStore({
    reducer: {
        menu: menuReducer
    }
})