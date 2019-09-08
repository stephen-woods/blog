import { combineReducers } from "redux"
import {responsiveStateReducer} from 'redux-responsive'
import mainList from "./menu_list"

export default combineReducers({
  mainList: mainList,
  browser: responsiveStateReducer
});
