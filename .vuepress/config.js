const path = require('path')
const webpack = require('webpack')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

// Content files
const contentEn = require('./i18n/EnUS/content')
const contentKo = require('./i18n/KoKr/content')
const contentZh = require('./i18n/Zh/content')

// Localization theme files
const themeEn = require('./i18n/EnUS/theme')
const themeKo = require('./i18n/KoKr/theme')
const themeZh = require('./i18n/Zh/theme')

module.exports = {
  dest: 'build',
  head: [
    ['meta', {'http-equiv': 'cleartype', 'content': 'on'}],
    ['meta', {'name': 'viewport', 'content': 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0'}],
    ['meta', {'name': 'HandheldFriendly', 'content': 'true'}],
    ['meta', {'name': 'msapplication-TileColor', 'content': '#da532c'}],
    ['meta', {'name': 'theme-color', 'content': '#003DC6'}],
    ['meta', {'name': 'format-detection', 'content': 'telephone=no'}],
    ['meta', {'property': 'og:site_name', 'content': 'Jibrel Network'}],
    ['link', { 'rel': 'apple-touch-icon', 'href': '/assets/misc/apple-touch-icon.png', 'sizes': '180x180' }],
    ['link', { 'rel': 'icon', 'type': 'image/png', 'href': '/assets/misc/favicon-32x32.png', 'sizes': '32x32' }],
    ['link', { 'rel': 'icon', 'type': 'image/png', 'href': '/assets/misc/favicon-16x16.png', 'sizes': '16x16' }],
    ['link', { 'rel': 'manifest', 'href': '/assets/misc/site.webmanifest.json' }],
    ['link', { 'rel': 'mask-icon', 'href': '/assets/misc/safari-pinned-tab.svg', 'color': '#003dc6' }],
    ['link', { 'rel': 'shortcut icon', 'href': '/assets/misc/favicon.ico' }],
    ['link', { 'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' }],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      shortLang: 'en',
      title: 'Jibrel Network',
      site: 'https://jibrel.network',
      data: contentEn,
    },
    '/ko/': {
      lang: 'ko-KR',
      shortLang: 'ko',
      title: 'Jibrel Network',
      site: 'https://jibrel.network',
      data: contentKo,
    },
    '/zh/': {
      lang: 'zh',
      shortLang: 'zh',
      title: 'Jibrel Network',
      site: 'https://jibrel.network',
      data: contentZh,
    }
  },
  themeConfig: {
    site: 'https://jibrel.network',
    twitter: '@jibrelnetwork',
    locales: {
      '/': {
        selectText: 'ENGLISH',
        data: themeEn,
      },
      '/ko/': {
        selectText: '한국어',
        data: themeKo,
      },
      '/zh/': {
        selectText: '中文',
        data: themeZh,
      }
    }
  },
  chainWebpack: (config, isServer) => {
    config.module.rules.delete('svg')
    config.module
      .rule('svgSprite')
        .test(/\.svg$/)
        .exclude
          .add(path.resolve(__dirname, 'src/assets/img/general'))
          .end()
        .include
          .add(path.resolve(__dirname, 'src/assets/img/svg'))
          .end()
        .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            extract: true,
            spriteFilename: '[hash:8].sprite.svg',
            publicPath: 'assets/img/',
          })
          .end()
        .use('svgo-loader')
          .loader('svgo-loader')
          .options({
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
          })
          .end()

      config.module
        .rule('svgImage')
          .test(/\.(svg)(\?.*)?$/)
          .exclude
            .add(path.resolve(__dirname, 'src/assets/img/svg'))
            .end()
          .use('file-loader')
            .loader('file-loader')
            .options({
              name: 'assets/img/[name].[hash:8].[ext]'
            })
            .end()

      config
        .plugin('SpriteLoaderPlugin')
          .use(SpriteLoaderPlugin)
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
    },
    plugins: [
      new webpack.EnvironmentPlugin({ ...process.env })
    ],
  },
  plugins: {
    '@vuepress/blog': {
      directories: [
        {
          id: 'blog',
          dirname: 'blog/articles',
          path: '/blog/articles/',
          layout: 'ArticlesList',
          itemLayout: 'Layout',
          itemPermalink: '/blog/articles/:slug',
          pagination: {
            lengthPerPage: 10,
            layout: 'ArticlesList',
          },
          frontmatter: {
            index: true,
            category: 'blog',
          }
        },
      ],
    },
    'sitemap': {
      hostname: 'https://jibrel.network'
    },
    'seo': {
      title: $page => ['blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? $page.title : $page.title ? 'Jibrel Network - ' + $page.title : 'Jibrel Network',
      description: $page => $page.frontmatter.description ? $page.frontmatter.description : 'Jibrel provides currencies, equities, commodities and other financial assets as standard ERC-20 tokens on the Ethereum blockchain',
      type: $page => ['news', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => $site.themeConfig.site + path,
      image: ($page, $site) => $page.frontmatter.heroImage ? $site.themeConfig.site + '/assets/img/blog/' + $page.frontmatter.heroImage.name : 'https://jibrel.network/assets/misc/logo.jpg',
      twitterCard: _ => 'summary_large_image',

      customMeta: (add, context) => {
        const {
            $site, 
            $page, 
        } = context
          add('twitter:site', $site.themeConfig.twitter)          
          add(
            'og:image:width',
            ['blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? '1323' : '500', 
            'property'
          )
          add(
            'og:image:height',
            ['blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? '901' : '250', 
            'property'
          )
      },
    }
  },
  extendMarkdown(md) {
    md.use(require("markdown-it-anchor"), {
      level: [2, 3, 4],
    })
    md.use(require("markdown-it-table-of-contents"), {
      listType: 'ol',
      includeLevel: [2, 3, 4],
      containerHeaderHtml: '<div class="header">Table of Contents</div>'
    })
    md.use(require('markdown-it-implicit-figures'), {
      figcaption: true,
    })
  },
}
