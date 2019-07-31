<template>
  <div class='articles-heaader' :class='isSticky && "-sticky"'>
    <div class='container _container-fix'>
      <router-link to='/blog/' class="title">{{$themeLocaleConfig.data.Article.Blog}}</router-link>
      <div class='tabs'>
        <router-link to='/blog/tokenization/' class='item' active-class='-current'>{{$themeLocaleConfig.data.Article.Tokenization}}</router-link>
        <router-link to='/blog/blockchain/' class='item' active-class='-current'>{{$themeLocaleConfig.data.Article.Blockchain}}</router-link>
        <router-link to='/blog/cryptocurrency/' class='item' active-class='-current'>{{$themeLocaleConfig.data.Article.Cryptocurrency}}</router-link>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'ArticlesHeader',
  data() {
    return {
      isSticky: false,
    }
  },
  methods: {
    handleScroll() {
      if (scrollY > 106) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>


<style lang="scss">
  @import './articlesHeader.scss';
</style>

