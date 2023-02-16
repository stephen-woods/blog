import {configureStore} from '@reduxjs/toolkit'
import menuReducer from "./reducers/menu-list"

const createStore = () =>
    configureStore(
        {
            reducer: {
                menu: menuReducer
            }
        }
    );
export default createStore