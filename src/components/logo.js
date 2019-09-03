import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../components/logo.module.css"
import { Breakpoint, BreakpointProvider } from "react-socks"


export default () => {
  const data = useStaticQuery(graphql`
    {
      file (name: { eq: "logo" }) {
        publicURL
      }
    }
  `,
  )
  return <BreakpointProvider>
    <Breakpoint small down>
      <div className={styles.s_logo}>
        <img className={styles.s_img} src={data.file.publicURL} alt=""/>
        <span className={styles.s_title}>Stephen Woods</span>
      </div>
    </Breakpoint>
    <Breakpoint medium up>
      <div className={styles.logo}>
        <img className={styles.img} src={data.file.publicURL} alt=""/>
        <span className={styles.title}>Stephen Woods</span>
      </div>
    </Breakpoint>
  </BreakpointProvider>
}
