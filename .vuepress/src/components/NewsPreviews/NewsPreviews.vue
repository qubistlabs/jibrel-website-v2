<template>
  <div class='news-preview'>
    <div class='item' data-aos='fade-down' data-aos-duration='300' data-aos-delay='250' v-for='post in posts'>
      <router-link :to='post.path' class='box' :class='isBordered && "-border"'>
        <div class='pic'><img :src='post.frontmatter.img' :srcset='`${ post.frontmatter.img2x }2x`' alt='Al Hilal Bank executes the world&#x27;s first Blockchain Sukuk transaction' class='img'></div>
        <div class='body'>
          <time class='date'>{{ post.frontmatter.date }}</time>
          <h2 class='title'>{{ post.frontmatter.title }}</h2>
          <p class='descr'>{{ post.frontmatter.description }}</p>
        </div>
      </router-link>
    </div>
</div>
</template>

<script>
export default {
  name: 'NewsPreviews',
  props: {
    isBordered: false, 
    limit: 0,
  },
  computed: {
    posts() {
      const posts = this.$site.pages
        .filter(x => x.path.startsWith('/news/') && !x.frontmatter.index)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));      
      if (!this.limit) {
        return posts
      }
      return posts.slice(0, Number(this.limit))
    }
  },

}
</script>


<style lang="scss">
  @import './newsPreviews.scss';
</style>

