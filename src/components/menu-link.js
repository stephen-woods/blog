"use strict"

import React from "react"
import { useDispatch } from "react-redux"
import styles from "./main-menu.module.css"
import { FaBars } from "react-icons/fa"
import * as ActionTypes from "../action-types"


export default () => {
  const dispatch = useDispatch()

  function toggle() {
    dispatch({
      type: ActionTypes.MAIN_MENU_TOGGLE,
    })
  }

  return <span className={styles.menuLink}>
    <FaBars onClick={toggle}/>
  </span>

}
