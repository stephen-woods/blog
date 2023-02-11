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
        "gatsby-plugin-breakpoints",
        "gatsby-plugin-google-gtag",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {},
                    }
                ]
            }
        },
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
                "name": "blog",
                "path": "./content/blog/"
            },
            __key: "blog"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "assets",
                "path": "./content/assets/"
            },
            __key: "assets"
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Roboto:100,400']
                }
            }
        }
    ]
};