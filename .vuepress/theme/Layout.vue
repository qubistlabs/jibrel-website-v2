<template>
  <div>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=[__GTM_ID__]"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <SpriteIcon />
    <MainHeader :color='getColor()'/>
    <Content v-if='typePage === "precast-page"' />
    <NewsPage v-if='typePage === "news"' > <Content /> </NewsPage>
    <MainFooter />
  </div>
</template>
<script>
import Vue from 'vue'
import AOS from 'aos'
import MainHeader from '@/components/base/MainHeader/MainHeader.vue'
import MainFooter from '@/components/base/MainFooter/MainFooter.vue'
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
import NewsPage from '@/components/NewsPage/NewsPage.vue'

export default {
  components: {
    MainHeader,
    MainFooter,
    SpriteIcon,
    NewsPage,
  },
  data() {
    return {
      typePage: String
    }
  },
  methods: {
    getColor() {
      switch (this.$route.path) {
        case '/':
          return 'white';
      default:
        return 'color';
      }
    },
    getTypePgae() {
      this.typePage = this.$page.frontmatter.type
      console.log(this.$page.frontmatter);
    },
  },
  watch: {
    $page: function (newVal) {
      this.getTypePgae()
    }
  },
  created () {
    this.getTypePgae()
    AOS.init({
      disable: 'mobile',
    })
  },
};
</script>

<style lang="scss">
  @import '@/assets/scss/core.scss'
</style>
