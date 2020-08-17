module.exports = function (eleventyConfig) {
    eleventyConfig.setLiquidOptions({
        // root: ["src/liquid/partials"], // overrides in compile with inputPath below
        extname: ".liquid",
        dynamicPartials: false,
        strict_filters: true
    });
};
