import React from "react"
import { useSelector } from "react-redux"
import Logo from "../components/logo.js"
import MenuList from "../components/menu-list"
import MenuLink from "../components/menu-link"
import styles from "./main-menu.module.css"


export default () => {
  const browser = useSelector(state => state.browser)
  return browser.greaterThan.small ? renderBig() : renderSmall()
}

function renderSmall() {

  const s = [styles.menu, styles.s_menu].join(" ")
  return <aside className={s}>
    <div>
      <Logo/>
      <MenuLink/>
    </div>
    <MenuList/>


  </aside>
}

function renderBig() {

  const s = styles.menu
  return <aside className={s}>
    <Logo/>
    <MenuList/>
  </aside>
}
