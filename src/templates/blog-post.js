import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styles from "./blog-post.module.css"


export default (props) => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return <Layout location={props.location} title={siteTitle}>

    <div className={styles.blogbanner}>
      <Img className={styles.img} fluid={featuredImgFluid}/>
      <span className={styles.title}>{post.frontmatter.title}</span>
      <span className={styles.subtitle}>{post.frontmatter.date}</span>
    </div>
    <div className={styles.blogbody}>
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>

      <hr/>

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </div>
  </Layout>
}


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        titleClass
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
