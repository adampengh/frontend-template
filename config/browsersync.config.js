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

// ==========================================================================
// Run a server
// ==========================================================================
// module.exports = {
//     server: {
//         baseDir: './dist'
//     },
//     files: ['dist/**'],
//     watch: true,
//     watchEvents: [
//         'change'
//     ],
//     logFileChanges: true
// };

// // ==========================================================================
// // IKEA Proxy
// // ==========================================================================
module.exports = {
    proxy: 'https://www.ikea.com/us/en/',
    files: ['dist/**'],
    watch: true,
    watchEvents: [
        'change'
    ],
    logFileChanges: true,
    serveStatic: ['dist'],
    snippetOptions: {

        // Ignore all HTML files within the templates folder
        ignorePaths: "templates/*.html",

        // Provide a custom Regex for inserting the snippet.
        rule: {
            match: /<\/body>/i,
            fn: function (snippet, match) {
                return '<link rel="stylesheet" href="/css/styles.css"><script src="/js/script.js"></script>' + snippet + match;
            }
        }
    }
};
