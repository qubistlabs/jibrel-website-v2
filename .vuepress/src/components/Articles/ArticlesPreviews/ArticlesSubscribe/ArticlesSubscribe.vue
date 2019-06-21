<template>
  <div class='articles-subscribe'>
    <h2 class="title" data-aos='fade-up' data-aos-duration='600' data-aos-delay='150'>{{$themeLocaleConfig.data.Article.SubscribeTitle}}</h2>
    <div class='form' data-aos='fade-in' data-aos-duration='1200' data-aos-delay='600'>
      <Subscribe />
    </div>
  </div>
</template>

<script>
import Subscribe from '@/components/Forms/Subscribe/Subscribe.vue'
export default {
  name: 'ArticlesSubscribe',
  components: {
    Subscribe
  }
}
</script>


<style lang="scss">
  @import './articlesSubscribe.scss';
</style>

