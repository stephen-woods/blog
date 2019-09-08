"use strict"

import React from "react"
import { useDispatch } from "react-redux"
import Logo from "../components/logo.js"
import MenuList from "../components/menu-list"
import styles from "./main-menu.module.css"
import { FaBars } from "react-icons/fa"
import * as ActionTypes from "../action-types"


export default () => {
  const dispatch = useDispatch();
  return <span className={styles.menuLink}>
    <FaBars onClick={()=> dispatch({
      type: ActionTypes.MAIN_MENU_TOGGLE})}/>
  </span>

}
