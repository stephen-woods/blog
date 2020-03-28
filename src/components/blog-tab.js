import { Link } from "gatsby"
import React from "react"
import style from "../components/blog-tab.module.css"


export default (props) => {

  const { node } = props

  const title = node.frontmatter.title || node.fields.slug
  return <div className={style.blogCard} key={node.fields.slug}>
    <div className={style.date}>{node.frontmatter.date}</div>
      <Link className={style.nav_a} to={node.fields.slug}>
        {title}
      </Link>

    <div>{node.frontmatter.tags.join(" / ")}</div>

    <p
      dangerouslySetInnerHTML={{
        __html: node.frontmatter.description || node.excerpt,
      }}
    />
  </div>
}