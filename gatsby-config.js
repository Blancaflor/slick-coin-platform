module.exports = {
  siteMetadata: {
    title: 'Start staking SLICK.',
    description: 'Launch of Crypto Coins SLICK.',
    keywords: 'SLICK crypto, crypto for stakers, crypto development, crypto app, crypto app staking, staking 2.0, XLM staking token, altcoin staking',
    author: `@Blancaflor`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
      spaceId: 'vfjor17j5fuv',
      accessToken: 'Y3mOI-68P2l9E-mXVRJt5jjp1P-SA0unP8K_ddAC2jU',
      }
    }
  ],
}




