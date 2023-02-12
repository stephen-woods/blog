import React from 'react'
import { Link } from 'gatsby'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import * as styles from "./blog-card.module.css"

const BlogCard = ({node}) => {
    const title = node.frontmatter.title
    
    return (
        <div className={styles.blogCard} key={node.fields.slug}>

            <div className={styles.date}>{node.frontmatter.date}</div>
            <Link className={styles.nav_a} to={node.fields.slug}>
                {title}
            </Link>

            <div>{node.frontmatter.tags.join(" / ")}</div>
        </div>
    )
}


export default BlogCard;