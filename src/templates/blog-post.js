import * as React from "react"
import {Link, graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import  * as styles from "./blog-post.module.css"
import "../global.css"

const BlogPost = ({ data, location, children, pageContext}) => {
    const post = data.mdx
    const siteTitle = data.site.siteMetadata.title
    const {previous, next} = pageContext
    const featuredImage = getImage(post.frontmatter.featuredImage)
    return (
        <Layout location={location} title={siteTitle}>
            <div className={styles.blogbanner}>
                <GatsbyImage image={featuredImage} alt="" className={styles.heroImage}/>
                <span className={styles.title}>{post.frontmatter.title}</span>
                <span className={styles.subtitle}>{post.frontmatter.date}</span>
            </div>
            <div className={styles.blogbody}>
                {children}

                <hr/>
                <ul className={styles.prevNext}>
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
    )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        titleClass
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
`

export const Head = ({data}) => {
    const siteTitle = data.site.siteMetadata.title
    const title = data.mdx.frontmatter.title
    return (
        <>
            <title>{siteTitle} - {title}</title>
            <meta name="description" content="Hello World"/>
            <body className={styles.bodyStyle}/>
        </>
    )
}