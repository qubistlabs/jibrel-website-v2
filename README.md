# jibrel-website

## Development

* `npm i`
* `tars dev -l` - start dev server with livereload (`localhost:3005`)
* `tars build` - build a project with the option of selecting parameters in the console  (`folder: ./public`)

[There is demo](https://jibrel-website.herokuapp.com/) on heroku instance, that hooks on push to `dev` branch.

## Production

* `npm i`
* `tars build --min` - build public html and minified assets
* `tars build --relize` - do not choose `--relize`
* share static from `./public` dir

### Project structure
```
├── gulpfile.js             # gulpfile of builder
├── tars.json               # System file with info about builder
├── tars-config.js          # Config file
├── package.json            # Basic dependencies
├── .babelrc                # Config for Babel
├── .eslintrc               # Config for eslint
├── user-package.json       # User dependencies
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
### component

Component is an independent unit of the page. Example component - "mainHeader" or "mainFooter". Each page consists of components. Any component may include other components and can be included into each other.

```
exampleComponent/                           # Component example
    └── assets/                             # Static files for current component (files with any extension) Subdirectories unsupport
    └── ie/                                 # Styles for IE9.scss|sass|less|styl и IE8.scss|sass|less|styl)
    └── data/                               # Folder for component's data
        ├── data.js                         # Data for component (there is an example for data in _template component)
    ├── exampleComponent.html               # Handlebars-represention of component
    ├── exampleComponent.scss               # Css-representation of component scss
    ├── exampleComponent.js                 # Js-represent
    ├── anotherComponentFolder

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

In some of yours i18n json (`data.json`) file you have:
```js
componentName: {
    dataType: {
        property: value
    }
}

So, you can use it in nunjucks template this way:
```handlebars
<title>{{title}}</title>
```
```handlebars
<title>{{head.defaults.title}}</title>
```
For more information you can refer to the  ./doc/en/html-processing.html, ./doc/en/handlebars-helpers.md or ./doc/ru/handlebars-helpers.md, ./doc/ru/html-processing.html,

* each component must be placed in directory named as per component, e.g. `ComponentName`
* file with component must be named by its name, e.g. `ComponentName.html`
* file with styles for component must be named `componentName.scss` (please note, first letter in lowercase)
* it's better to split big components (several screens to scroll) on another ones. And if these child components won't be used somewhere else, better to place them inside the component dir as subdir.

### css

We use `scss` [pre-processor](https://sass-lang.com/) with `rscss` [naming convention](http://rscss.io/)

* each component must be isolated. Unique behaviour/appearance in any place and case. So we must reset all styles that can be inherited from parent blocks/components (for example, using `all: initial` css property).
* each file with styles must be placed in correspond directory of the component, and then included in main `core.scss`
* all general things like color, icons must be grouped and placed in separate file

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

### linting

We use `eslint` for js and `stylelint` for css. `git` commit will fail if any of linters find an error.
