
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
    serveStatic: ["assets/dist/css"],
    files: "assets/dist/css/styles.css",
    snippetOptions: {
        rule: {
            match: /<\/head>/i,
            fn: function (snippet, match) {
                return '<link rel="stylesheet" type="text/css" href="/styles.css"/>' + snippet + match;
            }
        }
    },
    watch: true,
    watchEvents: [
        "change"
    ],
};
// module.exports = {
//     ui: {
//         port: 3001
//     },
//     files: [
//         "assets/dist"
//     ],
//     serveStatic: [
//         "assets/dist/css/styles.css"
//     ],
//     watchEvents: [
//         "change"
//     ],
//     "watch": true,
//     "ignore": [],
//     "single": false,
//     "watchOptions": {
//         "ignoreInitial": true
//     },
//     "server": false,
//     "proxy": {
//         "target": "https://www.ikea.com/us/en/"
//     },
//     "port": 3000,
//     "middleware": false,
//     "ghostMode": {
//         "clicks": true,
//         "scroll": true,
//         "location": true,
//         "forms": {
//             "submit": true,
//             "inputs": true,
//             "toggles": true
//         }
//     },
//     "logLevel": "info",
//     "logPrefix": "Browsersync",
//     "logConnections": false,
//     "logFileChanges": true,
//     "logSnippet": true,
//     "rewriteRules": [],
//     "open": "local",
//     "browser": "default",
//     "cors": true,
//     "xip": false,
//     "hostnameSuffix": false,
//     "reloadOnRestart": false,
//     "notify": true,
//     "scrollProportionally": true,
//     "scrollThrottle": 0,
//     "scrollRestoreTechnique": "window.name",
//     "scrollElements": [],
//     "scrollElementMapping": [],
//     "reloadDelay": 0,
//     "reloadDebounce": 500,
//     "reloadThrottle": 0,
//     "plugins": [],
//     "injectChanges": true,
//     "startPath": null,
//     "minify": true,
//     "host": null,
//     "localOnly": false,
//     "codeSync": true,
//     "timestamps": true,
//     "clientEvents": [
//         "scroll",
//         "scroll:element",
//         "input:text",
//         "input:toggles",
//         "form:submit",
//         "form:reset",
//         "click"
//     ],
//     "tagNames": {
//         "less": "link",
//         "scss": "link",
//         "css": "link",
//         "jpg": "img",
//         "jpeg": "img",
//         "png": "img",
//         "svg": "img",
//         "gif": "img",
//         "js": "script"
//     },
//     "injectNotification": false
// };
