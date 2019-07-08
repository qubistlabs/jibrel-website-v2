function MetaInfo(metaData) {  
  const urlBase = 'https://jibrel.network/'

  function titlePageFormatter() {
    if (metaData.isOnlyPageTitle) {
      return metaData.title
    }
    return metaData.title ? `Jibrel Network - ${metaData.title}` : 'Jibrel Network'
  }

  function getPath() {
    return metaData.path ? urlBase + metaData.path : urlBase
  }

  function getDescription() {
    return metaData.description ? metaData.description : 'Jibrel provides currencies, equities, commodities and other financial assets as standard ERC-20 tokens on the Ethereum blockchain'
  }

  function getAltSocialImage() {
    return metaData.heroImage ? urlBase + metaData.heroImage : 'https://jibrel.network/assets/misc/logo.jpg'
  }

  return {
    titleTemplate: titlePageFormatter(),
    meta: [
      {'http-equiv': 'cleartype', 'content': 'on'},
      {'name': 'viewport', 'content': 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0'},
      {'name': 'HandheldFriendly', 'content': 'true'},
      {'name': 'msapplication-TileColor', 'content': '#da532c'},
      {'name': 'theme-color', 'content': '#003DC6'},
      {'name': 'format-detection', 'content': 'telephone=no'},
      {'name': 'description', 'content': getDescription()},
      {'property': 'og:site_name', 'content': `Jibrel Network`},
      {'property': 'og:title', 'content': titlePageFormatter()},
      {'property': 'og:url', 'content': getPath()},
      {'property': 'og:description', 'content': getDescription()},
      {'property': 'og:image', 'content': getAltSocialImage()},
      {'property': 'og:image:type', 'content': 'image/jpeg'},
      {'property': 'og:image:width', 'content': '500'},
      {'property': 'og:image:height', 'content': '250'},
    ],
    link: [
      { 'rel': 'apple-touch-icon', 'href': '/assets/misc/apple-touch-icon.png', 'sizes': '180x180' },
      { 'rel': 'icon', 'type': 'image/png', 'href': '/assets/misc/favicon-32x32.png', 'sizes': '32x32' },
      { 'rel': 'icon', 'type': 'image/png', 'href': '/assets/misc/favicon-16x16.png', 'sizes': '16x16' },
      { 'rel': 'shortcut icon', 'href': '/assets/misc/favicon.ico' },
      { 'rel': 'manifest', 'href': '/assets/misc/site.webmanifest.json' },
      { 'rel': 'mask-icon', 'href': '/assets/misc/safari-pinned-tab.svg', 'color': '#003dc6' },
      { 'rel': 'image_src', 'href': 'https://jibrel.network/assets/misc/logo.jpg' },
      { 'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' },
    ]
  }
}

export default MetaInfo
