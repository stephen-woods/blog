import React from 'react'
import { Link } from 'gatsby'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import * as styles from "./blog-tab.module.css"
import "../global.css"

const BlogTab = ({node}) => {
    const title = node.frontmatter.title
    const image = getImage(node.frontmatter.featuredImage)

    return (
        <div className={styles.blogTab} key={node.fields.slug}>
            <Link className={styles.cardLink} to={node.fields.slug}>
                <div className={styles.tabGrid}>
                    <GatsbyImage image={image} alt=""/>
                    <div className={styles.content}>
                        <div className={styles.date}>{node.frontmatter.date}</div>
                        <div className={styles.nav_a}>{title}</div>
                        <p>
                            {node.frontmatter.blurb}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default BlogTab;