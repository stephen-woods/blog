import React from "react"
import { useSelector } from "react-redux"
import styles from "../components/footer.module.css"

export default () => {
  const browser = useSelector(state => state.browser)

  const s = browser.greaterThan.small ? styles.footer : styles.s_footer
  return <footer id="footer" className={s}>
    <div className={s}>
    Copyright © {new Date().getFullYear()} Stephen Woods. All Rights Reserved
    </div>
  </footer>
}