const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    return graphql(`
    query loadPagesQuery ($limit: Int!) {
      allMdx(limit: $limit, sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `, {limit: 1000})
        .then(result => {
            if (result.errors) {
                throw result.errors
            }

            // Create blog post pages.
            const posts = result.data.allMdx.edges

            posts.forEach((post, index) => {
                const previous = index === posts.length - 1 ? null : posts[index + 1].node
                const next = index === 0 ? null : posts[index - 1].node
                createPage({
                    // Path for this page — required
                    path: post.node.fields.slug,
                    component: `${blogPostTemplate}?__contentFilePath=${post.node.internal.contentFilePath}`,
                    context: {
                        // Add optional context data to be inserted
                        // as props into the page component.
                        //
                        // The context data can also be used as
                        // arguments to the page GraphQL query.
                        //
                        // The page "path" is always available as a GraphQL
                        // argument.
                        id: post.id,
                        slug: post.node.fields.slug,
                        previous,
                        next
                    },
                })
            })
        })
}

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({node, getNode})
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}