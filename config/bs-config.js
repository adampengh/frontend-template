/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    proxy: {
        target: "https://www.ikea.com/us/en/"
    },
    serveStatic: ["dist"],
    files: ["dist/**"],
    snippetOptions: {
        rule: {
            match: /<\/body>/i,
            fn: function (snippet, match) {
                return '<link rel="stylesheet" href="/css/styles.css"/><script src="/js/script.js"></script>' + snippet + match;
            }
        }
    },
    watch: true,
    watchEvents: [
        "change"
    ],
    logFileChanges: true
};
