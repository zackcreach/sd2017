module.exports = {
  siteMetadata: {
    title: `Skylar Denney`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/skylardenney`,
        token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTk2OTc3NjUsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqZTM2azdpMzFtZmgwMTU5NnQxYWtmbWwiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqZTUwdDhiOTM5bXMwMTQ1MWtlZnF2c3EifQ.0z1bRHxNimVUzVAZ5TF1lSeUBALxCBSNBp6fJL9pxuU`,
        query: `{
          allResumes {
            createdAt
            updatedAt
            isPublished
            id
            type
            name
            role
            credit
          }
        }`,
      },
    },
  ],
};
