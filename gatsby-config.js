/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require("path");

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        concurrentRequests: 1,
        html: {
          useGatsbyImage: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "22725544",
        respectDNT: false,
        productionOnly: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        root: path.join(__dirname, "src"),
      },
    },
  ],
  siteMetadata: {
    title: "PRATUS",
    copyright: `Copyright &copy; 2023 Disaster Technologies Incorporated. All Rights Reserved.`,
  },
};
