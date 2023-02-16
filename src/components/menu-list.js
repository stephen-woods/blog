import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "gatsby"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { setMenuVisible } from "../reducers/menu-list"
import * as styles from "./main-menu.module.css"


const MenuList = () => {
    const breakpoints = useBreakpoint();
    const active = useSelector(state => state.menu.visible);
    const dispatch = useDispatch()
    const s = breakpoints.sm ?
        {
            nav: active ? [styles.s_nav, styles.active].join(" ") : styles.s_nav,
            nav_a: styles.nav_a,
            nav_al: [styles.nav_a, styles.s_nav_a_lastChild].join(" ")
        } :
        {
            nav: styles.nav,
            nav_a: styles.nav_a,
            nav_al: [styles.nav_a, styles.s_nav_a_lastChild].join(" ")
        };

    return <nav className={s.nav}>
        <Link to="/" className={s.nav_a} onClick={() => dispatch(setMenuVisible(false))}>Home</Link>
        <Link to="/blog" className={s.nav_al} onClick={() => dispatch(setMenuVisible(false))}>Blog</Link>
        <Link to="/resume" className={s.nav_a} onClick={() => dispatch(setMenuVisible(false))}>Resume</Link>
    </nav>
}

export default MenuList;