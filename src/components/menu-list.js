import React from "react"
import { Link } from "gatsby"
import { useSelector } from "react-redux"
import styles from "./main-menu.module.css"


export default () => {
  const browser = useSelector(state => state.browser);
  const active = useSelector(state => state.mainList.visible)

  const s = browser.greaterThan.small ?
    {
      nav: styles.nav,
      nav_a: styles.nav_a,
      nav_al: [styles.nav_a, styles.s_nav_a_lastChild].join(" ")
    } :
    {
      nav: active ? [styles.s_nav, styles.active].join(" ") : styles.s_nav,
      nav_a: styles.nav_a,
      nav_al: [styles.nav_a, styles.s_nav_a_lastChild].join(" ")
    };

  return <nav className={s.nav}>
    <Link to="/" className={s.nav_a}>Home</Link>
    <Link to="/about" className={s.nav_a}>About</Link>
    <Link to="/resume" className={s.nav_a}>Resume</Link>
    <Link to="/blog" className={s.nav_al}>Blog</Link>
  </nav>
}