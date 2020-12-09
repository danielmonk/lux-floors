module.exports = {
  siteMetadata: {
    title: "Lux Floors",
    author: "Daniel Monk",
    description: "Lux Floors"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/LuxFloors-white.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // replace `UA-XXXXXXXXX-X` with your own Google Analytics Tracking ID
        trackingId: `'UA-182568014-1`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
