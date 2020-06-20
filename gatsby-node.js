const path = require('path');

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   // Destructuring the createPage function from the actions object
//   const { createPage } = actions;
//   const result = await graphql(``);
//   if (result.errors) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
//   }
// Create blog post pages.

// result.data.allSanityBlogPage.edges.forEach(({ node }) => {
//   createPage({
//     path: `/blog/${node.slug.current}`,
//     component: path.resolve(`./src/templates/blogArticle.js`),
//     context: {
//       slug: node.slug.current,
//     },
//   });
// });
// };

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
