import React from 'react'
import { graphql } from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Layout from "../components/layout"
import * as styles from "./index.module.css"
import BlogTab from "../components/blog-tab";


const heroImageStyle = {
    height: "500px"
}

const IndexPage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title
    const image = getImage(data.heroImage)
    const posts = data.allMdx.edges

    return (
        <Layout location={location} title={siteTitle}>
            <main>
                <GatsbyImage image={image} alt="" style={heroImageStyle}/>
                <div className={styles.blogGrid}>
                    {posts.map(({ node }) => <BlogTab key={node.fields.slug} node={node}/>)}
                </div>
            </main>
        </Layout>
    )
}

export default IndexPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        heroImage: file(relativePath: { eq: "steve-selfie.png" }) {
            childImageSharp {     
                gatsbyImageData(layout: FULL_WIDTH)
            } 
        }
        allMdx(sort: {frontmatter: {date: DESC}}, limit: 4) {
            edges {
                node {         
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        blurb 
                        featuredImage {
                            childImageSharp {
                                gatsbyImageData(width: 100, height: 100)                                          
                            }
                        }       
                    }
                }
            }
        }    
    } 
`;