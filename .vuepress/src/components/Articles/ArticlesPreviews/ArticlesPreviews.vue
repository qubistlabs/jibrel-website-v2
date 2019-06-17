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
            :src='`/assets/img/blog/${ post.frontmatter.source.img }${postfixImgToFirstArticle(index)}.jpg`'
            :srcset='`/assets/img/blog/${ post.frontmatter.source.img }${postfixImgToFirstArticle(index)}@2x.jpg 2x`'
            :alt='post.frontmatter.title'
            class='img'
          >
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
            <div class='more' v-if='isMainBlogPage && index === 0'><button class='j-button -fill-on-white-bg -h-small'>Read  •  8 min</button></div>
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
import EventBus from '@/utils/EventBus';
import ArticlesSubscribe from './ArticlesSubscribe/ArticlesSubscribe.vue';
export default {
  name: 'ArticlesPreviews',
  components: {
    ArticlesSubscribe
  },
  props: { 
    locale: String,
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
      if (path.indexOf('/blog/how-to-is/') !== -1) {        
        return '/blog/how-to-is/'
      }
      if (path.indexOf('/blog/updates/') !== -1) {
        return '/blog/updates/'
      }
      if (path.indexOf('/blog/tokenization/') !== -1) {
        return '/blog/tokenization/'
      }
    },
    getTagData(path) {
      if (path.indexOf('/blog/how-to-is/') !== -1) {
        return 'Blockchain Basics'
      }
      if (path.indexOf('/blog/updates/') !== -1) {
        return 'Updates'
      }
      if (path.indexOf('/blog/tokenization/') !== -1) {
        return 'Tokenziation'
      }
    },
  },
  computed: {
    posts() {      
      const posts = this.$site.pages
        .filter(x => x.path.startsWith(this.$page.path) && !x.frontmatter.index)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        console.log(posts, this.$page);

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

