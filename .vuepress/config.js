const path = require('path')
const webpack = require('webpack')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

// Content files
const CareerPageEn = require('./i18n/EnUS/content/CareerPage.json')
const EnterpriseSolutionEn = require('./i18n/EnUS/content/EnterpriseSolution.json')
const FeaturesProjectEn = require('./i18n/EnUS/content/FeaturesProject.json')
const JibrelIntegratableEn = require('./i18n/EnUS/content/JibrelIntegratable.json')
const LinkLanguageVersionEn = require('./i18n/EnUS/content/LinkLanguageVersion.json')
const MissionVisionValuesEn = require('./i18n/EnUS/content/MissionVisionValues.json')
const PartnersDataEn = require('./i18n/EnUS/content/PartnersData.json')
const ProductInfoEn = require('./i18n/EnUS/content/ProductInfo.json')
const ProjectContactEn = require('./i18n/EnUS/content/ProjectContact.json')
const ProjectErrorEn = require('./i18n/EnUS/content/ProjectError.json')
const ProvidesConsumerEnterpriseEn = require('./i18n/EnUS/content/ProvidesConsumerEnterprise.json')
const ScreenPreviewEn = require('./i18n/EnUS/content/ScreenPreview.json')

const CareerPageKo = require('./i18n/KoKr/content/CareerPage.json')
const EnterpriseSolutionKo = require('./i18n/KoKr/content/EnterpriseSolution.json')
const FeaturesProjectKo = require('./i18n/KoKr/content/FeaturesProject.json')
const JibrelIntegratableKo = require('./i18n/KoKr/content/JibrelIntegratable.json')
const LinkLanguageVersionKo = require('./i18n/KoKr/content/LinkLanguageVersion.json')
const MissionVisionValuesKo = require('./i18n/KoKr/content/MissionVisionValues.json')
const PartnersDataKo = require('./i18n/KoKr/content/PartnersData.json')
const ProductInfoKo = require('./i18n/KoKr/content/ProductInfo.json')
const ProjectContactKo = require('./i18n/KoKr/content/ProjectContact.json')
const ProjectErrorKo = require('./i18n/KoKr/content/ProjectError.json')
const ProvidesConsumerEnterpriseKo = require('./i18n/KoKr/content/ProvidesConsumerEnterprise.json')
const ScreenPreviewKo = require('./i18n/KoKr/content/ScreenPreview.json')

// Localization theme files
const FormTextEn = require('./i18n/EnUS/theme/FormText.json')
const ProjectMenuEn = require('./i18n/EnUS/theme/ProjectMenu.json')
const PageHeaderEn = require('./i18n/EnUS/theme/PageHeader.json')
const ProjectNewsEn = require('./i18n/EnUS/theme/ProjectNews.json')
const SectionNameEn = require('./i18n/EnUS/theme/SectionName.json')
const ShareEn = require('./i18n/EnUS/theme/Share.json')
const ArticleEn = require('./i18n/EnUS/theme/Article.json')

const FormTextKo = require('./i18n/KoKr/theme/FormText.json')
const ProjectMenuKo = require('./i18n/KoKr/theme/ProjectMenu.json')
const PageHeaderKo = require('./i18n/KoKr/theme/PageHeader.json')
const ProjectNewsKo = require('./i18n/KoKr/theme/ProjectNews.json')
const SectionNameKo = require('./i18n/KoKr/theme/SectionName.json')
const ShareKo = require('./i18n/KoKr/theme/Share.json')
const ArticleKo = require('./i18n/KoKr/theme/Article.json')

module.exports = {
  dest: 'build',
  head: [
    ['meta', {'http-equiv': 'cleartype', 'content': 'on'}],
    ['meta', {'name': 'viewport', 'content': 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0'}],
    ['meta', {'name': 'HandheldFriendly', 'content': 'true'}],
    ['meta', {'name': 'msapplication-TileColor', 'content': '#da532c'}],
    ['meta', {'name': 'theme-color', 'content': '#003DC6'}],
    ['meta', {'name': 'format-detection', 'content': 'telephone=no'}],
    ['meta', {'property': 'og:site_name', 'content': `Jibrel Network`}],
    ['meta', {'property': 'og:image', 'content': 'https://jibrel.network/assets/misc/logo.jpg'}],
    ['meta', {'property': 'og:image:type', 'content': 'image/jpeg'}],
    ['meta', {'property': 'og:image:width', 'content': '500'}],
    ['meta', {'property': 'og:image:height', 'content': '250'}],
    ['link', { 'rel': 'apple-touch-icon', 'href': '/assets/misc/apple-touch-icon.png', 'sizes': '180x180' }],
    ['link', { 'rel': 'icon', 'type': 'image/png', 'href': '/assets/misc/favicon-32x32.png', 'sizes': '32x32' }],
    ['link', { 'rel': 'icon', 'type': 'image/png', 'href': '/assets/misc/favicon-16x16.png', 'sizes': '16x16' }],
    ['link', { 'rel': 'manifest', 'href': '/assets/misc/site.webmanifest.json' }],
    ['link', { 'rel': 'mask-icon', 'href': '/assets/misc/safari-pinned-tab.svg', 'color': '#003dc6' }],
    ['link', { 'rel': 'shortcut icon', 'href': '/assets/misc/favicon.ico' }],
    ['link', { 'rel': 'image_src', 'href': 'https://jibrel.network/assets/misc/logo.jpg' }],
    ['link', { 'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' }],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      shortLang: 'en',
      title: 'Jibrel Network',
      site: 'https://jibrel.network',
      data: {
        CareerPage: CareerPageEn,
        EnterpriseSolution: EnterpriseSolutionEn,
        FeaturesProject: FeaturesProjectEn,
        JibrelIntegratable: JibrelIntegratableEn,
        LinkLanguageVersion: LinkLanguageVersionEn,
        MissionVisionValues: MissionVisionValuesEn,
        PartnersData: PartnersDataEn,
        ProductInfo: ProductInfoEn,
        ProjectContact: ProjectContactEn,
        ProjectError: ProjectErrorEn,
        ProvidesConsumerEnterprise: ProvidesConsumerEnterpriseEn,
        ScreenPreview: ScreenPreviewEn,
      }
    },
    '/ko/': {
      lang: 'ko-KR',
      shortLang: 'ko',
      title: 'Jibrel Network',
      site: 'https://jibrel.network',
      data: {
        CareerPage: CareerPageKo,
        EnterpriseSolution: EnterpriseSolutionKo,
        FeaturesProject: FeaturesProjectKo,
        JibrelIntegratable: JibrelIntegratableKo,
        LinkLanguageVersion: LinkLanguageVersionKo,
        MissionVisionValues: MissionVisionValuesKo,
        PartnersData: PartnersDataKo,
        ProductInfo: ProductInfoKo,
        ProjectContact: ProjectContactKo,
        ProjectError: ProjectErrorKo,
        ProvidesConsumerEnterprise: ProvidesConsumerEnterpriseKo,
        ScreenPreview: ScreenPreviewKo,
      }
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'ENGLISH',
        data: {
          ProjectMenu: ProjectMenuEn,
          PageHeader: PageHeaderEn,
          ProjectNews: ProjectNewsEn,
          SectionName: SectionNameEn,
          FormText: FormTextEn,
          Share: ShareEn,
          Article: ArticleEn,
        },
      },
      '/ko/': {
        selectText: '한국어',
        data: {
          ProjectMenu: ProjectMenuKo,
          PageHeader: PageHeaderKo,
          ProjectNews: ProjectNewsKo,
          SectionName: SectionNameKo,
          FormText: FormTextKo,
          Share: ShareKo,
          Article: ArticleKo,
        }
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
    'sitemap': {
      hostname: 'https://jibrel.network'
    },
  },
  markdown: {
    config: md => {
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
  },
}
