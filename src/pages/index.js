import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { Col, Container, Row} from "react-bootstrap"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div style={parallax}/>
        <Container>
          <Row>
            <Col sm={8}>
              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat et nibh eu pulvinar. Donec fermentum facilisis augue ut euismod. Cras at placerat dui. Nam a tincidunt sapien. Cras pretium laoreet pellentesque. Curabitur pretium sapien a risus venenatis semper. Aenean nibh nisl, consectetur nec magna sit amet, cursus sodales nibh. Phasellus tincidunt faucibus nisl non commodo. Nullam at ipsum nec neque porttitor sollicitudin eu quis eros. Fusce maximus placerat libero. Sed commodo nisi ac tortor convallis volutpat ac eget dui. Fusce porta justo in faucibus ullamcorper.
                </p>
                <p>
                Praesent cursus lacus arcu, eu porttitor enim volutpat eget. Vestibulum a lorem non sapien feugiat cursus. Ut volutpat facilisis fringilla. Vestibulum laoreet augue at tortor auctor, id placerat metus aliquam. Praesent sit amet pulvinar ipsum. Pellentesque accumsan at massa gravida ultrices. Fusce tempus lobortis diam quis aliquet. Aliquam arcu metus, lobortis sed lorem in, molestie fringilla libero. Cras sodales quis quam at semper. Donec at bibendum lectus, eu sollicitudin risus. Praesent dictum, mi non egestas hendrerit, sapien ligula maximus nisl, et egestas diam est sit amet orci. Integer ut pretium elit. Nullam maximus quam vel mi vestibulum, vitae accumsan mi fermentum. Donec euismod posuere est, vel iaculis leo condimentum convallis. In ac pretium sapien.
                </p>
                <p>
                Ut vitae faucibus ante. Sed venenatis congue enim, ac sagittis quam auctor nec. In dolor nisi, tristique sed bibendum et, tristique in nulla. Fusce ac ante auctor, pharetra metus sed, consectetur felis. Morbi lacus sapien, commodo sit amet venenatis a, tempor non lacus. Etiam mollis arcu vel dignissim vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut in augue non lectus malesuada vehicula. Proin non lorem mollis risus hendrerit congue at eget nisi. Maecenas quis tempor erat. Aenean sit amet vestibulum nisl, eget auctor ligula. Integer semper risus sed tellus efficitur, et pulvinar ipsum eleifend. Nulla blandit, ipsum id egestas facilisis, erat justo aliquet metus, dictum pellentesque nisl sapien vitae nisi. Nulla facilisi.
                </p>
              </div>
            </Col>
            <Col sm={4} className="card-body card shadow pb-3">

              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                const tags = node.frontmatter.tags || [];
                return (
                  <div key={node.fields.slug} >
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
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
            </Col>
          </Row>
        </Container>

      </Layout>
    )
  }
}

const parallax = {
  backgroundColor: "black",
  height: "250px"
}

export default BlogIndex

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
