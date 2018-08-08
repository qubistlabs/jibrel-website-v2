module.exports = {
    "postcss": [],
    "svg": {
        "active": true,
        "workflow": "symbols",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": "assets/img/"
        }
    },
    "css": {
        "workflow": "concat"
    },
    "js": {
        "workflow": "modular",
        "bundler": "webpack",
        "lint": false,
        "useBabel": true,
        "removeConsoleLog": true,
        "webpack": {
            "useHMR": false,
            "providePlugin": {
                $: 'jquery',
                '$': 'jquery',
                jquery: 'jquery',
                jQuery: 'jquery',
                'window.jquery': 'jquery',
                'window.jQuery': 'jquery',
            }
        },
        "jsPathsToConcatBeforeModulesJs": [],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": true,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "minifyHtml": false,
    "generateStaticPath": true,
    "buildPath": "./public/",
    "buildLang": [
        'EnUS',
        'KoKr'
    ],
    "devLang": "EnUS",
    "useBuildVersioning": false,
    "useArchiver": false,
    "ulimit": 4096,
    "templater": "handlebars",
    "cssPreprocessor": "scss",
    "useImagesForDisplayWithDpi": [
        96
    ],
    "fs": {
        "staticFolderName": "assets",
        "imagesFolderName": "img",
        "componentsFolderName": "components"
    },
    "staticPrefix": "assets/"
};
