# jibrel-website

## Development

* `npm i`
* `npm run build` - build public html & assets
* `./node_modules/.bin/gulp watch` - watch for HTML/CSS/JS changes
* `npm start` - start dev server (`localhost:3000`)

[There is demo](https://jibrel-website.herokuapp.com/) on heroku instance, that hooks on push to `dev` branch.

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

* each component must be isolated. Unique behaviour/appearance in any place and case. So we must reset all styles that can be inherited from parent blocks/components (for example, using `all: initial` css property).
* each file with styles must be placed in correspond directory of the component, and then included in main `core.scss`
* all general things like color, icons must be grouped and placed in separate file

### js

We use ES6+ standard features and compile them to ES2015 syntax.

All files with scripts must be placed in `src/js` dir.

All vendor scripts must be placed in `src/js/vendor` dir.

### bundling

We use `gulp` for bundling.

All assets must be minified for `production`.

### linting

We use `eslint` for js and `stylelint` for css. `git` commit will fail if any of linters find an error.
