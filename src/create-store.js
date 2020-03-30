import { compose, createStore } from "redux"
import rootReducer from "./reducers"
import { responsiveStoreEnhancer } from "redux-responsive"

export default () => {

  // const reduxDevToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // return createStore(
  //   rootReducer,
  //   compose(
  //     responsiveStoreEnhancer,
  //     reduxDevToolsEnhancer,
  //   ),
  // )


  return createStore(rootReducer, responsiveStoreEnhancer)
}