import React from "react"
import MainMenu from "./main-menu"
import Footer from "./footer"
import styles from "../components/layout.module.css"
import { useSelector } from "react-redux"


export default (props) => {
  const { children } = props
  const browser = useSelector(state => state.browser)
  const s = browser.greaterThan.small ? styles.content : styles.s_content

  return <div>
    <header>
      <MainMenu/>
    </header>
    <main className={s}>
      {children}
      <div style={{ height: "100px" }}/>
    </main>
    <Footer/>
  </div>
}
