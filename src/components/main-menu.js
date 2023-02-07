import React from "react"
import { useSelector } from "react-redux"
// import Logo from "../components/logo.js"
import MenuList from "./menu-list"
import MenuLink from "./menu-link"
import * as styles from "./main-menu.module.css"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'


const MainMenu = () => {
  const breakpoints = useBreakpoint()
  return breakpoints.xs ? renderBig() : renderSmall()

}

function renderSmall() {
  const s = [styles.menu, styles.s_menu].join(" ")
  return <aside className={s}>
    <div>
      <MenuLink/>
    </div>
    <MenuList/>


  </aside>
}

function renderBig() {
  const s = styles.menu
  return <aside className={s}>
    <MenuList/>
  </aside>
}

export default MainMenu;