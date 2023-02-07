/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Stephen Woods - Developer Blog`,
        author: `Steve Woods`,
        description: `Thoughts and musings about software development.`,
        siteUrl: `https://stephenwoods.dev`,
        social: {
            twitter: `stephen-woods`,
        },
    },
    plugins: [
        "gatsby-plugin-google-gtag",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-remark",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }
    ]
};