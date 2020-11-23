// require("dotenv").config({
//   path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
// })

// // require .env.development or .env.production
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Syne",
            weights: ["400"],
          },
          {
            family: "Work Sans",
            variable: true,
            weights: ["400..700", "400..700"],
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `http://34.249.174.105/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
  ],
}
