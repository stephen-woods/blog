import React from "react"
import { useDispatch } from 'react-redux'
import { FaBars } from "react-icons/fa"
import { toggleMenuVisible } from "../reducers/menu-list"
import * as styles from "./main-menu.module.css"

const MenuLink = () => {
    const dispatch = useDispatch()
    return (
        <span className={styles.menuLink}>
            <FaBars onClick={() => dispatch(toggleMenuVisible())}/>
        </span>
    );
}

export default MenuLink;