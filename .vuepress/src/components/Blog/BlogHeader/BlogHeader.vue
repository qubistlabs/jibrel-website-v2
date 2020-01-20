<template>
  <div class='blog-header' :class='isSticky && "-sticky"'>
    <div class='container _container-fix'>
      <router-link :to='`${this.$localeConfig.path}blog/`' class="title">{{$themeLocaleConfig.data.Article.Blog}}</router-link>
      <div class='tabs'>
        <router-link
            v-for="category in $localeConfig.blog.categories"
            :to='`${$localeConfig.path}blog/${category}/`'
            class='item'
            :class='currentCategory === category && "-current"'
        >{{$localeConfig.data[`Blog.category.${category}`]}}</router-link>
      </div>
  </div>
</div>
</template>

<script>
import { getCategoryLink } from '@/Utils/getCategoryLink.js'
export default {
  name: 'BlogHeader',
  data() {
    return {
      isSticky: false,
      currentCategory: '',
    }
  },
  methods: {
    handleScroll() {
      if (scrollY > 106) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    },
    menu() {
      const items = this.$el.querySelector('.tabs')
      const itemCurrent = this.$el.querySelector('.item.-current')
      if (!itemCurrent) return
      const itemsWidth = items.clientWidth
      const itemPosition = itemCurrent.offsetLeft
      const itemClientWidth = itemCurrent.clientWidth
      const scrollTo = itemPosition + itemClientWidth - itemsWidth
      items.scrollTo(scrollTo, 0);
      items.addEventListener('scroll', this.handleScroll)
    },
    setCategory() {
      this.currentCategory = getCategoryLink(this.$themeLocaleConfig.data, this.$page.regularPath, this.$localeConfig.path).slug
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.menu()
  },
  created() {
    this.setCategory()
  },
  watch: {
    $page() {
      this.setCategory()
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>


<style lang="scss">
  @import './blogHeader.scss';
</style>

