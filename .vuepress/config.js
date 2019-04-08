const path = require('path')

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

const FormTextKo = require('./i18n/KoKr/theme/FormText.json')
const ProjectMenuKo = require('./i18n/KoKr/theme/ProjectMenu.json')
const PageHeaderKo = require('./i18n/KoKr/theme/PageHeader.json') 
const ProjectNewsKo = require('./i18n/KoKr/theme/ProjectNews.json')
const SectionNameKo = require('./i18n/KoKr/theme/SectionName.json')

module.exports = {
  locales: {
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
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
        },
      },
      '/ko/': {
        selectText: '选择语言',
        data: {
          ProjectMenu: ProjectMenuKo,
          PageHeader: PageHeaderKo,
          ProjectNews: ProjectNewsKo,
          SectionName: SectionNameKo,
          FormText: FormTextKo,
        }
      }
    }
  },
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

