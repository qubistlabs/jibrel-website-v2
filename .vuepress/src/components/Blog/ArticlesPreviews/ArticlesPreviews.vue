<template>
  <div class='articles-preview'>
    <div
      v-for='(post, index) in posts'
      v-if="post.category.content !== 'Blog'"
      class='item'
      :class='setClassToFirstArticle(index)'
      data-aos='fade-down'
      :data-aos-duration='aosDuration(index)'
      data-aos-delay='250'
      :key='post.regularPath'
    >
      <router-link :to='post.regularPath' class='box'>
        <div class='pic' :style="`
          background-color: ${post.frontmatter.heroImage.bgColor};
          background-image: url(${post.img});
        `">
          <div class='overlay' v-if='(isMainBlogPage && index !== 0) || !isMainBlogPage || !isFirstPage'>
            <div class='read'>
              <span class="j-button -fill-on-white-bg -h-small">
                {{$themeLocaleConfig.data.Article.Read}} • {{timeToRead(post.frontmatter)}} {{$localeConfig.data['Blog.Article.minutes']}}
              </span>
            </div>
          </div>
        </div>
        <div class='body'>
          <div class='row' v-if="isMainBlogPage">
            <router-link :to='post.category.category_href' class='tag'>{{post.category.content}}</router-link>
            <div class='read' v-if='isMainBlogPage && index === 0 && isFirstPage'>
              <span class='j-button -fill-on-white-bg -h-small'>
                {{$themeLocaleConfig.data.Article.Read}} • {{timeToRead(post.frontmatter)}} {{$localeConfig.data['Blog.Article.minutes']}}
              </span>
            </div>
            <slot />
          </div>
          <h2 class='title'>{{ post.frontmatter.title }}</h2>
          <p class='descr'>{{ post.frontmatter.description }}</p>
        </div>
      </router-link>
      <Subscribe v-if='isMainBlogPage && index === 0 && isFirstPage' />
    </div>
  </div>
</template>

<script>
import { getCategoryLink } from '@/Utils/getCategoryLink.js'
import Subscribe from '../../Forms/Subscribe/Subscribe.vue';

export default {
  name: 'ArticlesPreviews',
  components: {
    Subscribe,
  },
  props: {
    pages: Array,
    isMainBlogPage: Boolean,
    limit: 0,
    removeIt: '',
  },
  data() {
    return {
      isFirstPage: true,
    }
  },
  methods: {
    timeToRead({
      wordCount,
      charCount,
    }) {
      switch (this.$localeConfig.shortLang) {
        case 'en':
        case 'ko': {
          return Math.round(wordCount / this.$localeConfig.readingSpeed)
        }
        case 'zh': {
          return Math.round(charCount / this.$localeConfig.readingSpeed)
        }
        default: {
          return 0
        }
      }
    },
    setClassToFirstArticle(index) {
      if (this.isMainBlogPage) {
        return index === 0 && this.isFirstPage && '-first-card'
      }
    },
    aosDuration(index) {
      if (this.isMainBlogPage && index !== 0) {
        index -= 1
      }
      return 300 + index % 3 * 300
    },
    getImage(page) {
      return `/assets/img/blog/${page.frontmatter.heroImage.name}`
    }
  },
  computed: {
    posts() {
      return this.pages
        .map(page => ({
          ...page,
          category: getCategoryLink(this.$themeLocaleConfig.data, page.regularPath, this.$localeConfig.path),
          img: this.getImage(page)
        }))
    },
  },
  created() {
    this.isFirstPage = !(this.$page.regularPath.indexOf('/blog/page/') !== -1)
    this.category = getCategoryLink(this.$themeLocaleConfig.data, this.$page.regularPath, this.$localeConfig.path)
  },
  watch: {
    $page(newPage) {
      this.isFirstPage = !(newPage.regularPath.indexOf('/blog/page/') !== -1)
    },
  }
}
</script>


<style lang="scss">
  @import './articlesPreviews.scss';
</style>

