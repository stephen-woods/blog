import { createStore } from "redux"
import rootReducer from "./reducers";
import {responsiveStoreEnhancer} from 'redux-responsive'

export default () => {
  return createStore(rootReducer, responsiveStoreEnhancer)
}