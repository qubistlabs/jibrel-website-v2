function MetaInfo(
  url,
  titlePage,
  description,
) {
  const urlBase = 'https://jibrel.network/'
  url ? url = urlBase + url : url = urlBase
  titlePage ? titlePage = `- ${titlePage}` : titlePage = ''
  description ? description : description = 'Jibrel provides currencies, equities, commodities and other financial assets as standard ERC-20 tokens on the Ethereum blockchain'
  
  return {
    title: 'Jibrel Network',
    titleTemplate: `%s ${titlePage}`,
    meta: [
      {'http-equiv': 'cleartype', 'content': 'on'},
      {'name': 'viewport', 'content': 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0'},
      {'name': 'HandheldFriendly', 'content': 'true'},
      {'name': 'msapplication-TileColor', 'content': '#da532c'},
      {'name': 'theme-color', 'content': '#003DC6'},
      {'name': 'format-detection', 'content': 'telephone=no'},
      {'name': 'description', 'content': description},
      {'property': 'og:site_name', 'content': `Jibrel Network`},
      {'property': 'og:title', 'content': `Jibrel Network ${titlePage}`},
      {'property': 'og:url', 'content': url},
      {'property': 'og:description', 'content': description},
      {'property': 'og:image', 'content': '/assets/misc/logo.jpg'},
      {'property': 'og:image:type', 'content': 'image/jpeg'},
      {'property': 'og:image:width', 'content': '500'},
      {'property': 'og:image:height', 'content': '250'},
    ],
    link: [
      { 'rel': 'apple-touch-icon', 'href': '/assets/misc/apple-touch-icon.png', 'size': '180x180' },
      { 'rel': 'icon', 'type': 'image/png', 'href': '/assets/misc/favicon-32x32.png', 'size': '32x32' },
      { 'rel': 'icon', 'type': 'image/png', 'href': '/assets/misc/favicon-16x16.png', 'size': '16x16' },
      { 'rel': 'manifest', 'href': '/assets/misc/site.webmanifest' },
      { 'rel': 'mask-icon', 'href': '/assets/misc/safari-pinned-tab.svg', 'color': '#003dc6' },
      { 'rel': 'image_src', 'href': '/assets/misc/logo.jpg' },
      { 'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' },
    ]
  }
}

export default MetaInfo