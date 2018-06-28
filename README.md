# jibrel-website

## Development

* `npm i`
* `npm run start` or `npm run dev` - start dev server with livereload (`localhost:3005`)

## Production

* `npm i`
* `npm run build` - build public html and minified assets
* share static from `./public` dir

### Project structure
```
├── gulpfile.js             # gulpfile of builder
├── tars.json               # System file with info about builder
├── tars-config.js          # Config file
├── package.json            # Basic dependencies
├── .babelrc                # Config for Babel
├── .eslintrc               # Config for eslint
├── .stylelintrc            # Config for stylelin
├── .eslintignore           # List eslint of ignored files
├── .editorconfig
├── .lintstagedrc
├── Dockerfile
├── gulpfile.js
├── LICENSE
├── nginx.conf
├── package.json
├── package-lock.json       # Fixed dependencies
├── plugins-config.json     # Config for gulp plugin
├── README.md               # Readme project
├── run.sh
├── tars-config.js          # Config for tars
├── tars.json               # Config for tars
├── version.txt
├── webpack.config.js
└── tars/                   # Tasks and helpers for gulp
    └── helpers/            # Helpers
    └── tasks/              # System tasks
    └── user-tasks/         # User's tasks
    └── watchers/           # System watchers
    └── user-watchers/      # User's watchers
    └── tars.js             # Main file of the builder
└── src/                 # The main project folder
    └── components/         # Components
    └── pages/              # Page's templates
    └── assets/             # Static-files (css, js and so on)
└── docs/                   # Documentation tars
```

### Сomponent

Component is an independent unit of the page. Example component - "MainHeader" or "MainFooter". Each page consists of components. Any component may include other components and can be included into each other.

```
ExampleComponent/                           # Component example
    └── assets/                             # Static files for current component (files with any extension) Subdirectories unsupport
    └── ie/                                 # Styles for IE9.scss IE8.scss
    └── data/                               # Folder for component's data
        ├── data.js                         # Data for component (there is an example for data in _template component)
    ├── ExampleComponent.html               # Handlebars-represention of component
    ├── exampleComponent.scss               # Css-representation of component scss
    ├── ExampleComponent.js                 # Js-represent
    ├── ChildComponentFolder
```

### Folder structure for static files

We assume that Scss was chosen as a css-preprocessor.

```
assets/                                     # Folder for static-files. You can choose the name for that folder in tars-config.js
    └── fonts/                              # Fonts (can contain subdirectories)
    └── img/                                # Images. You can choose the name for that folder in tars-config.js
        └── content/                        # Images for content (can contain subdirectories)
        └── plugins/                        # Images for plugins (can contain subdirectories)
        └── general/                        # General images for project (can contain subdirectories)
        └── sprite/                         # Raster images, which is included in png-sprite.
            └── 96dpi/                      # Images for displays with dpi 96
            ...
            └── 384dpi/                     # Images for displays with dpi 384 (more info in images-processing)
        └── svg/                            # SVG-images
    └── js/                                 # js
        └── framework/                      # js-frameworks (backbone, for example)
        └── libraries/                      # js-libraries (jquery, for-example)
        └── plugins/                        # js-plugins
        └── separate-js/                    # js-files, which must not be included in ready bundle
    └── misc/                               # General files, which will be moved to root directory of ready project — favicons, robots.txt and so on  (can contain subdirectories)
    └── scss
        ├── entry/                          # Styles for entry points for css in case of manual css-processing More info [here](css-manual-processing.md).
        └── etc/                            # Styles, which will be included at the end of the ready css-file (can contain subdirectories)
        └── libraries/                      # Styles for libraries (can contain subdirectories)
        └── plugins/                        # Styles for plugins (can contain subdirectories)
        └── sprite-generator-templates/     # Templates for sprite generating
        └── sprites-scss/                   # Mixins for sprites
        ├── separate-css/                   # Css-files, which must not be included in ready bundle
        ├── common.scss                     # General styles
        ├── fonts.scss                      # Styles for fonts
        ├── GUI.scss                        # Styles for GUI elements (inputs, buttons and so on)
        ├── mixins.scss                     # Project's mixins
        ├── vars.scss                       # Variables
```

### html

We use handelbars templating. Replacing of variables is provided by gulp.

For example:

In some of yours ComponentName (`./data/data.js`) file you have:
```js
ComponentName: {
    dataType: {
        title: 'value'
    }
}
```

So, you can use it in handelbars template this way:
```handlebars
<title>{{ComponentName.dataType.title}}</title>
```
=>
```HTML
<title>value</title>
```

For more information you can refer to the [documentation](https://github.com/tars/tars/blob/master/docs/en/html-processing.md)

* each component must be placed in directory named as per component, e.g. `ComponentName`
* file with component must be named by its name, e.g. `ComponentName.html`
* file with styles for component must be named `componentName.scss` (please note, first letter in lowercase)
* it's better to split big components (several screens to scroll) on another ones. And if these child components won't be used somewhere else, better to place them inside the component dir as subdir.

### css

We use `scss` [pre-processor](https://sass-lang.com/) with `rscss` [naming convention](http://rscss.io/)

* each component must be isolated. Unique behaviour/appearance in any place and case. So all styles must be resetted to prevent inheriting from parent blocks/components (for example, using `all: initial` css property).
* each file with styles must be placed in correspond directory of the component, and then included in main `core.scss`
* all general things like color, icons must be grouped and placed in separate file
* main `rscss` points:
  * name of `component` consists at least two words, words should be splitted with dash
  * name of `element` consists only one word
  * name of `variant` consists at least one word, and must be started with dash
  * `helpers` mustn't be used from `rscss` convention (`scss` `mixins` must be used instead of them)


### js

We use ES6+ standard features and compile them to ES2015 syntax.

Vendor files with scripts must be placed in `src/js/plugins` dir.

### svg

Images that will be included in such way must be in a folder (default path): 'assets/img/svg/'. Nested directories are **not** supported.

Using in handlebars:
```handlebars
{{Icon iconName='icon-name' className='class'  iconWidth='25' iconHeight='25'}}
```

### bundling

We use `gulp` for bundling.

All assets must be minified for `production`.

[TARS](https://github.com/tars/tars) is a builder for modern frontend of any complexity, which is based on Gulp.js. It facilitates and accelerates process of web-development. TARS will be suitable for teams and individual developers. It solves the most routine cases associated with web-development and brings you more pleasure from work.
[Documentation](https://github.com/tars/tars#documentation)

### linting

We use `eslint` for js and `stylelint` for css. `git` commit will fail if any of linters find an error.

[eslint-config-jibrelnetwork](https://github.com/jibrelnetwork/eslint-config-jibrelnetwork)

[stylelint-config-jibrelnetwork](https://github.com/jibrelnetwork/stylelint-config-jibrelnetwork)

These two packages must be included in `devDependencies` of `package.json`.

`html` files should follow these rules:
1) spaces, not tabs
2) 1 tab = 2 spaces
3) max line length = 100 symbols
4) single quotes, not double

### working with branches

* `master` branch is for `production`.
* `develop` branch is for `development`.
* two types of developer branches:
  * `feature/<feature-name>`
  * `fixup/<fixup-name>`

Every task/feature/fix must be implemented in separate branch, and then merged via PR to `develop`. Once changes have been reviewed and tested on `develop`, PR to `master` must be created.
