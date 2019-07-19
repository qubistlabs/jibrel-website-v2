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
            <router-link :to='getTagUrl(post.path)' class='tag'>{{getTagData(post.path)}}</router-link>
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
    getTagUrl(path) {
      if (path.indexOf('/blog/how-tos/') !== -1) {
        return '/blog/how-tos/'
      }
      if (path.indexOf('/blog/updates/') !== -1) {
        return '/blog/updates/'
      }
      if (path.indexOf('/blog/tokenization/') !== -1) {
        return '/blog/tokenization/'
      }
      if (path.indexOf('/blog/blockchain/') !== -1) {
        return '/blog/blockchain/'
      }
      if (path.indexOf('/blog/') !== -1) {
        return '/blog/'
      }
    },
    getTagData(path) {
      if (path.indexOf('/blog/how-tos/') !== -1) {
        return this.$themeLocaleConfig.data.Article.HowTos
      }
      if (path.indexOf('/blog/updates/') !== -1) {
        return this.$themeLocaleConfig.data.Article.Updates
      }
      if (path.indexOf('/blog/tokenization/') !== -1) {
        return this.$themeLocaleConfig.data.Article.Tokenization
      }
      if (path.indexOf('/blog/blockchain/') !== -1) {
        return this.$themeLocaleConfig.data.Article.Blockchain
      }
    },
  },
  computed: {
    posts() {
      const posts = this.$site.pages
        .filter(x => x.path.startsWith(this.getTagUrl(this.$page.path)) && !x.frontmatter.index && this.removeIt !== x.key)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

      if (!this.limit) {
        return posts
      }

      EventBus.$emit('posts-length', posts.length)
      return posts.slice(0, Number(this.limit))
    },
  },
}
</script>


<style lang="scss">
  @import './articlesPreviews.scss';
</style>

