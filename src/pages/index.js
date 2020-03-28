import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./index.module.css"
import Img from "gatsby-image"
import BlogTab from "../components/blog-tab"

export default (props) => {

  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const frontImage = data.file.childImageSharp.fluid

  return <Layout location={props.location} title={siteTitle}>
    <Img className={styles.img} fluid={frontImage}/>
    <div className={styles.indexbody}>
      {posts.map(({ node }) => <BlogTab key={node.fields.slug} node={node}/>)}
    </div>
  </Layout>
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 4) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            blurb
            tags
            featuredImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "steve-selfie.png" }) {
      childImageSharp {       
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      } 
    }
  }
`