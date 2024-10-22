const isProduction = process.env.ELEVENTY_ENV === 'production';
const baseUrl = isProduction ? '/minimal-blog/' : '/'; // Adjust 'minimal-blog' to your repo name

module.exports = function(eleventyConfig) {
    // Pass through assets
    eleventyConfig.addPassthroughCopy('assets');

    // Add global data for base URL
    eleventyConfig.addGlobalData('baseUrl', baseUrl);


    // Add a custom filter to trim leading slashes
    eleventyConfig.addFilter("trimSlash", function(value) {
        return value.replace(/^\/+/, ""); // Remove leading slashes
    });


    // Add a collection for posts
    eleventyConfig.addCollection("post", function(collection) {
        return collection.getFilteredByGlob("posts/*.md");
    });

    return {
        dir: {
            input: '.',
            includes: '_includes',
            data: '_data',
            output: '_site',
        },
    };
};