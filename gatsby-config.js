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
	`gatsby-plugin-netlify`,
	{
	      resolve: `gatsby-plugin-google-gtag`,
	      options: {
	        // You can add multiple tracking ids and a pageview event will be fired for all of them.
	        trackingIds: [
	          'G-LRF971PJMB', // Google Analytics / GA
	          // optional
	          //'OPTIONAL----AW-CONVERSION_ID', // Google Ads / Adwords / AW
	          //'OPTIONAL----DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
	        ],
	        // This object gets passed directly to the gtag config command
	        // This config will be shared across all trackingIds
	        //gtagConfig: {
	        //  optimize_id: 'OPT_CONTAINER_ID',
	        //  anonymize_ip: true,
	        //  cookie_expires: 0,
	        //},
	        // This object is used for configuration specific to this plugin
	        pluginConfig: {
	          // Puts tracking script in the head instead of the body
	          head: true,
	          // Setting this parameter is also optional
	          //respectDNT: true,
	          // Avoids sending pageview hits from custom paths
	          exclude: ['/preview/**', '/do-not-track/me/too/'],
	        },
	      },
	    },
  ],
};
