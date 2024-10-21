module.exports = function(eleventyConfig) {
    // Pass through assets
    eleventyConfig.addPassthroughCopy('assets');
  
    return {
      dir: {
        input: '.',
        includes: '_includes',
        data: '_data',
        output: '_site',
      },
    };
  };