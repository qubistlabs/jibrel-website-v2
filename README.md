# jibrel-website

## Development

* `npm i`
* `npm run build` - build public html & assets
* `./node_modules/.bin/gulp watch` - watch for HTML/CSS/JS changes
* `npm start` - start dev server (`localhost:3000`)

## Production

* `npm i`
* `npm run build:prod` - build public html and minified assets
* share static from `./public` dir

## Project structure

* public - folder to share static/bundled assets from
* src
  * html
    * i18n - `i18n` dictionaries for each supported language
    * components - components that can be re-used on several pages
      * base - base components (like inputs, buttons, icons, etc)
    * routes - pages
  * js
  * styles - general styles (`colors.scss`, `icons.scss`, etc) and main entry point `core.scss`
* gulpfile.js - configuration file for `gulp`

### html

We use nunjucks templating. Replacing of variables is provided by gulp.

For example:

In some of yours i18n json (`some.json`) file you have:
```json
{
  "foo": "bar"
}
```

So, you can use it in nunjucks template this way:
```html
<div>
  {{ some.foo }}
</div>
```

For more information you can refer to the [documentation](https://mozilla.github.io/nunjucks/)

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

All files with scripts must be placed in `src/js` dir.

All vendor scripts must be placed in `src/js/vendor` dir.

### bundling

We use `gulp` for bundling.

All assets must be minified for `production`.

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
