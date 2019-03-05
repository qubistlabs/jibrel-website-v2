const path = require('path')

module.exports = {
  title: 'Jibrel',
  description: "Test using VuePress",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src')
      },
    },
  },
  module: {
    rules: [
    {
      test: /\.svg$/,
      include: [
        path.resolve(__dirname, 'src/img/svg'),
      ],
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            spriteFilename: '[hash:8].sprite.svg',
            publicPath: 'src/assets/img/',
          },
        },
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              { removeTitle: true },
              { removeDoctype: true },
              { removeComments: true },
              { collapseGroups: true },
              { convertPathData: true },
              { removeDimensions: true },
              { convertTransform: true },
              { removeUselessDefs: true },
              { removeUselessStrokeAndFill: true },
              { removeNonInheritableGroupAttrs: true },
              { removeStyleElement: true },
              { removeAttrs: { attrs: '(fill|stroke)' } },
            ],
          },
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
           
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              require('autoprefixer')({
                browsers: [
                  '>1%',
                  'last 19 versions',
                  'Firefox ESR',
                  'not ie < 11',
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
        'sass-loader',
      ]
    }]
  },
}

