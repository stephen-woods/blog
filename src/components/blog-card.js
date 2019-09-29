import { Link } from "gatsby"
import React from "react"
import style from "../components/blog-card.module.css"

import Img from "gatsby-image"


export default (props) => {

  const { node } = props
  const featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid

  const title = node.frontmatter.title || node.fields.slug
  return <div className={style.blogCard} key={node.fields.slug}>
    <Img className={style.img} fluid={featuredImgFluid}/>
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