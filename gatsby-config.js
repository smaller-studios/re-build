module.exports = {
  siteMetadata: {
    title: "Re-Build",
    description: "A builderx alternative that codes react for you",
    author: "@smaller-studios",
    image: "https://avatars.githubusercontent.com/u/84823798?s=200&v=4",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-mdx",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-blocks",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blocks",
        path: "packages/react/src",
      },
    },
    {
      resolve: "gatsby-plugin-fathom",
      options: {
        siteId: "ZGBAXRBH",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Re-Build",
        short_name: "Re-Build",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#33e",
        display: "standalone",
        icon: "src/assets/images/favicon.png",
      },
    },
  ],
};
