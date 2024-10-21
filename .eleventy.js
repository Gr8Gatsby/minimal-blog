const isProduction = process.env.ELEVENTY_ENV === 'production';
const baseUrl = isProduction ? '/minimal-blog/' : '/'; // Adjust 'minimal-blog' to your repo name

module.exports = function(eleventyConfig) {
    // Pass through assets
    eleventyConfig.addPassthroughCopy('assets');

    // Add global data for base URL
    eleventyConfig.addGlobalData('baseUrl', baseUrl);

    return {
        dir: {
            input: '.',
            includes: '_includes',
            data: '_data',
            output: '_site',
        },
    };
};