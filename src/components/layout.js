import React from "react"
import MainMenu from "./main-menu"
import * as styles from "./layout.module.css"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

const Layout = (props) => {
    const {children} = props
    const breakpoints = useBreakpoint()
    const s = breakpoints.sm ? styles.s_content : styles.content;

    return (
        <div>
            <header>
                <MainMenu/>
            </header>
            <main className={s}>
                {children}
                <div style={{height: "100px"}}/>
            </main>
        </div>
    )
}

export default Layout;