"use strict"

import * as ActionTypes from "../action-types"

const defaultState = {
  visible: true,
}

export default (mainMenu = defaultState, action) => {
  if (action.type === ActionTypes.MAIN_MENU_TOGGLE) {
    return Object.assign({}, mainMenu, { visible: action.visible })
  }
  return mainMenu

}