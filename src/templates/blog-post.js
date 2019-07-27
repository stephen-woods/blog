import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { rhythm, scale } from "../utils/typography"
import Img from "gatsby-image"
import { Col, Container, Row } from "react-bootstrap"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
    const titleClass = post.frontmatter.titleClass || "text-white"
    const titleClassFinal = + titleClass + " text-shadow-1"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div style={{
          position: "relative"
        }}>
        <Img style={{
          height: 250
        }} fluid={featuredImgFluid}/>
        <Container>
          <Row>
          <Col style={{
            position: "absolute",
            bottom:"25px"
          }}>
          <h2 className="text-white text-shadow-1">{post.frontmatter.title}</h2>
          </Col>
          </Row>
        </Container>
        </div>
        <Container>
          <Row>
            <Col>


              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-1),
                }}
              >
                <span className="text-white text-shadow-1">
                {post.frontmatter.date}
                </span>
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.html }}/>
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />

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
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

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
