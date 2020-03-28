import { Link } from "gatsby"
import React from "react"
import style from "../components/blog-tab.module.css"
import Img from "gatsby-image"

export default (props) => {

  const { node } = props
  const featuredImg = node.frontmatter.featuredImage.childImageSharp.fixed

  const title = node.frontmatter.title || node.fields.slug
  return <div className={style.blogCard} key={node.fields.slug}>
      <div className={style.column}>
        <Img fixed={featuredImg}/>
      </div>
      <div className={style.column}>
        <div className={style.date}>{node.frontmatter.date}</div>
        <Link className={style.nav_a} to={node.fields.slug}>
          {title}
        </Link>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.blurb,
          }}
        />
      </div>
    </div>

}