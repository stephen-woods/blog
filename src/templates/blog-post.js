import * as React from "react"
import {Link, graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import  * as styles from "./blog-post.module.css"

const heroImageStyle = {
    height: "300px"
}

const bodyStyle = {
    margin: "0 0 0 0"
}

const BlogPost = (props) => {
    const post = props.data.mdx
    const siteTitle = props.data.site.siteMetadata.title
    const {previous, next} = props.pageContext
    const featuredImage = getImage(post.frontmatter.featuredImage)
    return (
        <Layout location={props.location} title={siteTitle}>
            <div className={styles.blogbanner}>
                <GatsbyImage image={featuredImage} alt="" style={heroImageStyle}/>
                <span className={styles.title}>{post.frontmatter.title}</span>
                <span className={styles.subtitle}>{post.frontmatter.date}</span>
            </div>
            <div className={styles.blogbody}>
                {props.children}

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

export const Head = (props) => {
    const siteTitle = props.data.site.siteMetadata.title
    const title = props.data.mdx.frontmatter.title
    return (
        <>
            <title>{siteTitle} - {title}</title>
            <meta name="description" content="Hello World"/>
            <body style={bodyStyle}/>
        </>
    )
}