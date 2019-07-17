<template>
  <div class='news-preview' :class="limit === '3' && '-last-hide'">
    <div v-for='(post, index) in posts' class='item' data-aos='fade-down' :data-aos-duration='300 + index % 3 * 300' data-aos-delay='250' :key='post.path'>
      <router-link :to='post.path' class='box' :class='isBordered && "-border"'>
        <div class='pic'>
          <img
            :src='`/assets/img/cover/${ post.frontmatter.source.id }.png`'
            :srcset='`/assets/img/cover/${ post.frontmatter.source.id }@2x.png 2x`'
            :alt='post.frontmatter.title'
            class='img'
          >
        </div>
        <div class='body'>
          <time
            class='date'
            :datetime='post.frontmatter.date'
          >
            {{ post.frontmatter.date | formatDate }}
          </time>
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
    locale: String,
    limit: 0,
  },
  computed: {
    posts() {
      const posts = this.$site.pages
        .filter(x => x.path.startsWith(this.$localeConfig.path + 'news/') && !x.frontmatter.index)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
      if (!this.limit) {
        return posts
      }
      return posts.slice(0, Number(this.limit))
    },
  },
}
</script>


<style lang="scss">
  @import './newsPreviews.scss';
</style>

