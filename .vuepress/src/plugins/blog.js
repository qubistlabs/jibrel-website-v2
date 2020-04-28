const splitPathToParams = (matcher, regularPath) => {
  const splitRegularPath = regularPath.split('/')
  const splitMatcher = matcher.split('/')

  const params = {}

  for (let i = 0; i < splitRegularPath.length; i++) {
    const matcherPart = splitMatcher[i]
    const regularPathPart = splitRegularPath[i]

    if (matcherPart === undefined || regularPathPart === undefined) {
      return null
    }

    if (matcherPart === regularPathPart) {
      // It matches, just skip this step
    } else if (matcherPart.startsWith(':')) {
      params[matcherPart.slice(1)] = regularPathPart
    } else {
      return null
    }
  }

  return params
}

module.exports = (options, ctx) => {
  const { regularPathMatcher } = options

  return {
    name: '@jibrelnetwork/blog',
    extendPageData ($page) {
      const regularPathParams = splitPathToParams(regularPathMatcher, $page.regularPath)
      if (regularPathParams && $page._content) {
        const parts = $page._content.split('---')
        const text = parts[0] === ''  && parts.length >= 3
          ? parts.slice(2).join('')
          : parts.join('')

        $page.frontmatter = {
          layout: 'Article',
          category: regularPathParams.category,
          ...$page.frontmatter,
          wordCount: text.split(/\s+/).length,
          charCount: text.length,
        }
        $page.blog = {
          params: regularPathParams,
        }
      }
    },
  }
}
