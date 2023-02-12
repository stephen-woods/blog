import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogCard from "../components/blog-card";
import * as styles from "./blog.module.css"

const BlogGrid = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges


    return (
        <Layout location={location} title={siteTitle}>
            <div className={styles.blogListing}>
                <div>
                    <h2 className={styles.title}>BLOG</h2>
                </div>
                <div className={styles.blogGrid}>
                {posts.map(({ node }) => <BlogCard key={node.fields.slug} node={node}/>)}
                </div>
            </div>
        </Layout>
    )
}

export default BlogGrid;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            tags
            featuredImage {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
              )            
            }
          }       
        }
      }
    }
  }    
}  
`