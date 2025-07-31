const mila = require("markdown-it-link-attributes");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static/robots.txt": "robots.txt" });

  eleventyConfig.addPassthroughCopy({ "static/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "static/apple-touch-icon.png": "apple-touch-icon.png" });
  eleventyConfig.addPassthroughCopy({ "static/favicon-32x32.png": "favicon-32x32.png" });
  eleventyConfig.addPassthroughCopy({ "static/favicon-16x16.png": "favicon-16x16.png" });
  eleventyConfig.addPassthroughCopy({ "static/site.webmanifest": "site.webmanifest" });

  const milaOptions = {
    matcher: (href) => href.match(/^https?:\/\//),
    attrs: {
      target: "_blank",
      rel: "noopener"
    }
  };

  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(mila, milaOptions));

  eleventyConfig.addPlugin(pluginSitemap, {
    lastModifiedProperty: "modified",
    sitemap: {
      hostname: "https://bnlucas.com",
    },
  });

  // Set directories to facilitate easier setup
  return {
    dir: {
      input: "./",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
