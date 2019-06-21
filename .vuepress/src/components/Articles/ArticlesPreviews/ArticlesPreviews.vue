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
            :src='`/assets/img/blog/${ post.frontmatter.heroImage }${postfixImgToFirstArticle(index)}.jpg`'
            :srcset='`/assets/img/blog/${ post.frontmatter.heroImage }${postfixImgToFirstArticle(index)}@2x.jpg 2x`'
            :alt='post.frontmatter.title'
            class='img'
          >
          <div class='overlay' v-if='isMainBlogPage && index !== 0'>
            <div class='read'><button class="j-button -fill-on-white-bg -h-small">{{$themeLocaleConfig.data.Article.Read}}</button></div>
          </div>
        </div>
        <div class='body'>
          <div class='row'>
            <time
              class='date'
              :datetime='post.frontmatter.date'
            >
              {{ post.frontmatter.date | formatDate }}
            </time>
            <router-link :to='getTagUrl(post.path)' class='tag'>{{getTagData(post.path)}}</router-link>
            <div class='read' v-if='isMainBlogPage && index === 0'><button class='j-button -fill-on-white-bg -h-small'>{{$themeLocaleConfig.data.Article.Read}}</button></div>
            <slot />
          </div>
          <h2 class='title'>{{ post.frontmatter.title }}</h2>
          <p class='descr'>{{ post.frontmatter.description }}</p>
        </div>
      </router-link>
      <ArticlesSubscribe v-if='isMainBlogPage && index === 0' />
    </div>
  </div>
</template>

<script>
import EventBus from '@/Utils/EventBus.js';
import ArticlesSubscribe from './ArticlesSubscribe/ArticlesSubscribe.vue';
export default {
  name: 'ArticlesPreviews',
  components: {
    ArticlesSubscribe
  },
  props: { 
    isMainBlogPage: Boolean,
    limit: 0,
  },
  methods: {
    postfixImgToFirstArticle(index) {
      if (this.isMainBlogPage) {
        return index === 0 ? '-full' : ''
      }
      return ''
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
    },
  },
  computed: {
    posts() {      
      const posts = this.$site.pages
        .filter(x => x.path.startsWith(this.getTagUrl(this.$page.path)) && !x.frontmatter.index)
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

