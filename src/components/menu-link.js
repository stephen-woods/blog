import React from "react"
import { FaBars } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { toggle } from "../reducers/menu-list"
import * as styles from "./main-menu.module.css"

const MenuLink = () => {
    const dispatch = useDispatch()
    return <span className={styles.menuLink}>
    <FaBars onClick={() => dispatch(toggle())}/>
  </span>
}

export default MenuLink;