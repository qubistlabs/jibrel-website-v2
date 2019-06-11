<template>
  <div class='articles-heaader' :class='isSticky && "-sticky"'>
    <BackLink v-if='isShowBack' />
    <div class='container _container-fix'>
      <router-link to='/blog/' class="title">Blog</router-link>
      <div class='tabs'>
        <router-link to='/blog/updates/' class='item' active-class='-current'>Updates</router-link>
        <router-link to='/blog/tokenization/' class='item' active-class='-current'>Tokenization</router-link>
        <router-link to='/blog/how-to-is/' class='item' active-class='-current'>How To’s</router-link>
      </div>
  </div>
</div>
</template>

<script>

import BackLink from '../BackLink/BackLink.vue'
export default {
  name: 'ArticlesHeader',
  components: {
    BackLink
  },
  props: {
    isShowBack: Boolean,
  },
  data() {
    return {
      isSticky: false,
    }
  },
  methods: {
    getPosition() {      
      window.addEventListener('scroll', function(e) {               
        if (window.scrollY > 0) {
          this.isSticky = true
        } else {

          this.isSticky = false
        }
      })
    }
  },
  mounted() {
    this.getPosition()
  }
} 
</script>


<style lang="scss">
  @import './articlesHeader.scss';
</style>

