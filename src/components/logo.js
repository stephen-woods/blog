import React from "react"
import { useSelector } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"

import styles from "../components/logo.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    {
      file (name: { eq: "logo" }) {
        publicURL
      }
    }
  `,
  )
  const browser = useSelector(state => state.browser)

  const s = browser.greaterThan.small ?
    {
      logo: styles.logo,
      img: styles.img,
      title: styles.title
    } :
    {
      logo: styles.s_logo,
      img: styles.s_img,
      title: styles.s_title
    };

    return <div className={s.logo}>
      <img className={s.img} src={data.file.publicURL} alt=""/>
      <span className={s.title}>Stephen Woods</span>
    </div>
}


