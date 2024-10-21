const path = require("path");

module.exports = function(eleventyConfig) {
    // Pass through assets
    eleventyConfig.addPassthroughCopy('assets');

    // Set base URL based on environment
    const isGitHubPages = process.env.ELEVENTY_ENV === 'production';
    const baseUrl = isGitHubPages ? '/minimal-blog/' : '/'; // Update this path to match your repo name

    // Add the base URL to the template data
    eleventyConfig.addGlobalData('baseUrl', baseUrl);

    return {
        dir: {
            input: '.',          // Input directory
            includes: '_includes', // Includes directory
            data: '_data',       // Data directory
            output: '_site',     // Output directory
        },
    };
};