import { get } from 'lodash-es'

const CATEGORIES = [
  {
    slug: '/blog/how-tos',
    id: 'Article.HowTos',
  },
  {
    slug: '/blog/updates',
    id: 'Article.Updates',
  },
  {
    slug: '/blog/tokenization',
    id: 'Article.Tokenization',
  },
  {
    slug: '/blog/blockchain',
    id: 'Article.Blockchain',
  },
  {
    slug: '/blog/cryptocurrency',
    id: 'Article.Cryptocurrency',
  },
  {
    slug: '/blog',
    id: 'Article.Blog',
  },
]

export const getCategoryLink = (translation, url) => {
  const category = CATEGORIES.find(
    c => RegExp(c.slug).test(url)
  )

  if (!category) {
    throw new Error('NO_CATEGORY_DEFINED')
  }

  return {
    href: category.slug,
    content: get(translation, category.id),
  }
}
