import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./index.module.css"
import Img from "gatsby-image"

export default (props) => {

  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const frontImage = data.file.childImageSharp.fluid

  console.log(data)
  return <Layout location={props.location} title={siteTitle}>

    <Img className={styles.img} fluid={frontImage}/>
    <div className={styles.indexbody}>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const tags = node.frontmatter.tags || []
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <br/>
            <div>
              {
                tags.map(tag => <span key={tag} className="badge badge-success mr-1">{tag}</span>)
              }
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })}
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
            tags
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