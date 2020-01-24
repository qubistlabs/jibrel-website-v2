import { get } from 'lodash-es'

const CATEGORIES = [
  {
    slug: 'how-tos',
  },
  {
    slug: 'updates',
  },
  {
    slug: 'tokenization',
  },
  {
    slug: 'blockchain',
  },
  {
    slug: 'cryptocurrency',
  },
  {
    slug: 'startups',
  },
  {
    slug: 'investing',
  },
  {
    slug: '',
  },
]

export const getCategoryLink = (translation, url, languagePathPrefix) => {
  const category = CATEGORIES.find(
    c => RegExp(c.slug).test(url)
  )

  if (!category) {
    throw new Error('NO_CATEGORY_DEFINED')
  }

  return {
    category_href: languagePathPrefix + 'blog/' + category.slug,
    href: languagePathPrefix + 'blog/' + category.slug,
    slug: category.slug,
    content: translation[`Blog.category.${category.slug}`],
  }
}
