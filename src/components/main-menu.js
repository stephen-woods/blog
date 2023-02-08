import React from "react"
import {useBreakpoint} from 'gatsby-plugin-breakpoints'
// import Logo from "../components/logo.js"
import MenuList from "./menu-list"
import MenuLink from "./menu-link"
import * as styles from "./main-menu.module.css"

const MainMenu = () => {
  const breakpoints = useBreakpoint()
  return breakpoints.sm ? renderSmall() : renderBig();
}

function renderSmall() {
    const s = [styles.menu, styles.s_menu].join(" ")
    return (
        <div className={s}>
            <MenuLink/>
            <MenuList/>
        </div>
    );
}

function renderBig() {
    const s = styles.menu
    return (
        <div className={s}>
            <div>
                <MenuList/>
            </div>
        </div>
    );
}

export default MainMenu;