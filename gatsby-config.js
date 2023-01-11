/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `FlyBoots`,
    siteUrl: `flyboots.store`
  },
  plugins: [
    {
      resolve: 'gatsby-source-datocms',
      options: {
        "apiToken": "f33d0f088a4c9b2c1853dd9ac6c227"
      }
    },
    'gatsby-plugin-cname',
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"]
};