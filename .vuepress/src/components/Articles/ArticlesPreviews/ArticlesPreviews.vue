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
                {{$themeLocaleConfig.data.Article.Read}} • {{timeToRead(post.frontmatter.wordCount)}} {{$themeLocaleConfig.data.Article.Min}}
              </span>
            </div>
          </div>
        </div>
        <div class='body'>
          <div class='row' v-if="isMainBlogPage">
            <router-link :to='post.category.category_href' class='tag'>{{post.category.content}}</router-link>
            <div class='read' v-if='isMainBlogPage && index === 0 && isFirstPage'>
              <span class='j-button -fill-on-white-bg -h-small'>
                {{$themeLocaleConfig.data.Article.Read}} • {{timeToRead(post.frontmatter.wordCount)}} {{$themeLocaleConfig.data.Article.Min}}
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
  data() {
    return {
      isFirstPage: true,
      pages: []
    }
  },
  methods: {
    timeToRead(wordCount) {
      return Math.round(wordCount / this.$themeLocaleConfig.data.Article.AverageReadSpeed)
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
  },
  computed: {
    posts() {      
      if (this.$pagination) {
        this.pages = this.$pagination.pages
      } else {
        this.pages = this.$site.pages
      }

      this.pages = this.pages
      .filter(x => x.regularPath.startsWith(this.category.href) && !x.frontmatter.index && x.frontmatter.title)
      .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      .map(page => ({
        ...page,
        category: getCategoryLink(this.$themeLocaleConfig.data, page.regularPath),
        img: require(`@/../../_img/blog/${page.frontmatter.heroImage.name}`)        
      }))
      if (!this.limit) {
        return this.pages
      }
      EventBus.$emit('posts-length', this.pages.length)
      return this.pages.slice(0, Number(this.limit))
    },
  },
  created() {        
    this.isFirstPage = !(this.$page.regularPath.indexOf('/blog/articles/page/') !== -1)
    this.category = getCategoryLink(this.$themeLocaleConfig.data, this.$page.regularPath)
  },
  watch: {
    $page(newPage) {
      this.isFirstPage = !(newPage.regularPath.indexOf('/blog/articles/page/') !== -1)
    },
  }
}
</script>


<style lang="scss">
  @import './articlesPreviews.scss';
</style>

