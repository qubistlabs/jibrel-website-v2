import { get } from 'lodash-es'

const CATEGORIES = [
  {
    slug: 'how-tos',
    id: 'Article.HowTos',
  },
  {
    slug: 'updates',
    id: 'Article.Updates',
  },
  {
    slug: 'tokenization',
    id: 'Article.Tokenization',
  },
  {
    slug: 'blockchain',
    id: 'Article.Blockchain',
  },
  {
    slug: 'cryptocurrency',
    id: 'Article.Cryptocurrency',
  },
  {
    slug: '',
    id: 'Article.Blog',
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
    content: get(translation, category.id),
  }
}
