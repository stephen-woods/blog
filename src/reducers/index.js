import { combineReducers } from "redux"
import {responsiveStateReducer} from 'redux-responsive'
import mainMenu from "../reducers/main-menu"

export default combineReducers({
  mainMenu: mainMenu,
  browser: responsiveStateReducer
});
