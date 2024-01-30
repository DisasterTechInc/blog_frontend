const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post-template.js`);

  const result = await graphql(
    `
      query Blogs {
        allWpPost(sort: { date: DESC }, limit: 1000) {
          nodes {
            author {
              node {
                avatar {
                  url
                }
                name
              }
            }
            content
            date(formatString: "MMM DD, YYYY")
            featuredImage {
              node {
                sourceUrl
              }
            }
            title
            excerpt
            categories {
              nodes {
                name
              }
            }
            id
            slug
            internal {
              type
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create blog posts pages.
  const posts = result?.data?.allWpPost?.nodes;

  posts.forEach((post, index) => {
    createPage({
      path: `/blog/${post?.slug}`,
      component: blogPost,
      context: {
        slug: post?.slug,
        id: post?.id,
        category: post?.categories?.nodes[0]?.name,
      },
    });
  });
};
