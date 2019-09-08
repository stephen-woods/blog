"use strict"

import * as ActionTypes from "../action-types"

const defaultState = {
  visible: true,
}


export default (menuList = defaultState, action) => {
  if (action.type === ActionTypes.MAIN_MENU_TOGGLE) {
    return Object.assign({}, menuList, { visible: !menuList.visible })
  }
  return menuList

}