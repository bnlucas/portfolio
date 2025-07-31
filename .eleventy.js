const mila = require("markdown-it-link-attributes");

module.exports = function(eleventyConfig) {
  // Passthrough copy the public folder
  eleventyConfig.addPassthroughCopy({"static": "static"});

  const milaOptions = {
    matcher: (href) => href.match(/^https?:\/\//), // Match external URLs
    attrs: {
      target: "_blank",
      rel: "noopener" // Recommended for security
    }
  };

  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(mila, milaOptions));

  // Set directories to facilitate easier setup
  return {
    dir: {
      input: "./",    // Look for content in the current directory
      output: "_site", // Output to _site (default)
      includes: "_includes", // Where to find layout files
      data: "_data" // Where to find global data files (optional)
    }
  };
};