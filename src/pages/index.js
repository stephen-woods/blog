import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Col, Container, Row } from "react-bootstrap"
import styles from "./index.module.css"

export default (props) => {

  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return <Layout location={props.location} title={siteTitle}>
    <div style={parallax}/>
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


const parallax = {
  backgroundColor: "grey",
  height: "500px",
}


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 8) {
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
  }
`
