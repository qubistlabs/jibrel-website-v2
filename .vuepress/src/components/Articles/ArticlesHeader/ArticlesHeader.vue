<template>
  <div class='articles-heaader' :class='isSticky && "-sticky"'>
    <div class='container _container-fix'>
      <router-link to='/blog/' class="title">Blog</router-link>
      <div class='tabs'>
        <router-link to='/blog/updates/' class='item' active-class='-current'>Updates</router-link>
        <router-link to='/blog/tokenization/' class='item' active-class='-current'>Tokenization</router-link>
        <router-link to='/blog/how-tos/' class='item' active-class='-current'>How To’s</router-link>
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
      console.log(window.scrollY);
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

