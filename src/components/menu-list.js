import React from "react"
import { Link } from "gatsby"
import { useSelector } from 'react-redux'
import * as styles from "./main-menu.module.css"
import { useBreakpoint} from 'gatsby-plugin-breakpoints'

const MenuLink = () => {
    const breakpoints = useBreakpoint();
    const active = useSelector(state => state.menu.visible);
    const s = breakpoints.xs ?
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
        <Link to="/blog" className={s.nav_al}>Blog</Link>
        <Link to="/resume" className={s.nav_a}>Resume</Link>
    </nav>
}

export default MenuLink;