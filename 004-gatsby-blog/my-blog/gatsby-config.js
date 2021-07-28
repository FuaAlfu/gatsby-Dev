
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-system`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-system`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-source-system`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
  ],
}
