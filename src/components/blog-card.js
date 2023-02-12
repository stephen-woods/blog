import React from 'react'
import { Link } from 'gatsby'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import * as styles from "./blog-card.module.css"
import "../global.css"

const heroImageStyle = {
    height: "200px"
}
const BlogCard = ({node}) => {
    const title = node.frontmatter.title
    const image = getImage(node.frontmatter.featuredImage)

    return (
        <div className={styles.blogCard} key={node.fields.slug}>
            <GatsbyImage image={image} alt="" style={heroImageStyle}/>
            <div className={styles.date}>{node.frontmatter.date}</div>
            <Link className={styles.nav_a} to={node.fields.slug}>
                {title}
            </Link>
            <p>
                {node.frontmatter.description || node.excerpt}
            </p>
        </div>
    )
}


export default BlogCard;