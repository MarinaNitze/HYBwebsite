require(`dotenv`).config({ path: `.env` });

module.exports = {
  siteMetadata: {
    title: `Hack Your Bureaucracy`,
    description: `Hack Your Bureaucracy Book Site`,
    author: `@bloom-works`,
  },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'hack-your-bureaucracy',
        protocol: 'http',
        hostname: 'hack-your-bureaucracy.s3-website-us-east-1.amazonaws.com',
        generateRedirectObjectsForPermanentRedirects: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
