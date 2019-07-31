<template>
  <div class='articles-preview'>
    <div
      v-for='(post, index) in posts'
      class='item'
      :class='setClassToFirstArticle(index)'
      data-aos='fade-down'
      :data-aos-duration='aosDuration(index)'
      data-aos-delay='250'
      :key='post.path'
    >
      <router-link :to='post.path' class='box'>
        <div class='pic'>
          <img
            :src='`/assets/img/blog/${ post.frontmatter.heroImage.name }`'
            :alt='post.frontmatter.heroImage.alt ? post.frontmatter.heroImage.alt : post.frontmatter.title'
            class='img'
          >
          <div class='overlay' v-if='(isMainBlogPage && index !== 0) || !isMainBlogPage'>
            <div class='read'>
              <button class="j-button -fill-on-white-bg -h-small">
                {{$themeLocaleConfig.data.Article.Read}} • {{timeToRead(post.frontmatter.wordCount)}} {{$themeLocaleConfig.data.Article.Min}}
              </button>
            </div>
          </div>
        </div>
        <div class='body'>
          <div class='row'>
            <router-link :to='post.category.href' class='tag'>{{post.category.content}}</router-link>
            <div class='read' v-if='isMainBlogPage && index === 0'>
              <button class='j-button -fill-on-white-bg -h-small'>
                {{$themeLocaleConfig.data.Article.Read}} • {{timeToRead(post.frontmatter.wordCount)}} {{$themeLocaleConfig.data.Article.Min}}
              </button>
            </div>
            <slot />
          </div>
          <h2 class='title'>{{ post.frontmatter.title }}</h2>
          <p class='descr'>{{ post.frontmatter.description }}</p>
        </div>
      </router-link>
      <Subscribe v-if='isMainBlogPage && index === 0' />
    </div>
  </div>
</template>

<script>
import EventBus from '@/Utils/EventBus.js';
import { getCategoryLink } from '@/Utils/getCategoryLink.js'
import Subscribe from '../../Forms/Subscribe/Subscribe.vue';

export default {
  name: 'ArticlesPreviews',
  components: {
    Subscribe,
  },
  props: {
    isMainBlogPage: Boolean,
    limit: 0,
    removeIt: '',
  },
  methods: {
    timeToRead(wordCount) {
      return Math.round(wordCount / this.$themeLocaleConfig.data.Article.AverageReadSpeed)
    },
    setClassToFirstArticle(index) {
      if (this.isMainBlogPage) {
        return index === 0 && '-first-card'
      }
    },
    aosDuration(index) {
      if (this.isMainBlogPage && index !== 0) {
        index -= 1
      }
      return 300 + index % 3 * 300
    },
  },
  computed: {
    posts() {
      const posts = this.$site.pages
        .filter(x => x.path.startsWith(this.category.href) && !x.frontmatter.index && this.removeIt !== x.key)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
        .map(page => ({
          ...page,
          category: getCategoryLink(this.$themeLocaleConfig.data, page.path)
        }))

      if (!this.limit) {
        return posts
      }

      EventBus.$emit('posts-length', posts.length)
      return posts.slice(0, Number(this.limit))
    },
  },
  created() {
    this.category = getCategoryLink(this.$themeLocaleConfig.data, this.$page.path)
  },
}
</script>


<style lang="scss">
  @import './articlesPreviews.scss';
</style>

