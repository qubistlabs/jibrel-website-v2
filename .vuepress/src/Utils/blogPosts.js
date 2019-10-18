const INDEX_PAGE_LENGTH = 4
const NEXT_PAGE_LENGTH = 6

export const isBlogPostRegularPath = (shortLang, regularPath) => {
  const REGULAR_PATH_REGEXP = new RegExp(`^/${shortLang}/blog/([\\w-]+)/[\\w-]+/`)

  return REGULAR_PATH_REGEXP.test(regularPath)
}

export const getBlogPosts = (shortLang, pages) => {
  return pages
    .filter(page => isBlogPostRegularPath(shortLang, page.regularPath))
    .sort((a, b) => {
      // if published on the same date, sort by name, ascending (a -> z)
      if (a.frontmatter.date === b.frontmatter.date) {
        return a.frontmatter.title < b.frontmatter.title
          ? -1
          : 1
      }

      // if dates differ, latest posts go up
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    })
}

export const getBlogPostsPage = (shortLang, pages, pageIndex) => {
  const allPosts = getBlogPosts(shortLang, pages)

  const start = pageIndex < 1
    ? 0
    : INDEX_PAGE_LENGTH + NEXT_PAGE_LENGTH * (pageIndex - 1)
  const end = pageIndex < 1
    ? INDEX_PAGE_LENGTH
    : start + NEXT_PAGE_LENGTH

  return allPosts.slice(start, end)
}
