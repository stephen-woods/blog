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
    const badges = node.frontmatter.badges.map(badge => {
        const url = "https://img.shields.io/badge/" + badge;
        return <img src={url} alt={badge}/>
    });

    return (
        <div className={styles.blogCard} key={node.fields.slug}>
            <Link className={styles.cardLink} to={node.fields.slug}>
                <GatsbyImage image={image} alt="" style={heroImageStyle}/>
                <div className={styles.date}>{node.frontmatter.date}</div>
                <div className={styles.badges}>{badges}</div>
                <div className={styles.nav_a}>{title}</div>
                <p>
                    {node.frontmatter.description || node.excerpt}
                </p>
            </Link>
        </div>
    )
}


export default BlogCard;