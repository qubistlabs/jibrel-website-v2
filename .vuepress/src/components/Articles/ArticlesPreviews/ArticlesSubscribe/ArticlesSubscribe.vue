<template>
  <div class='articles-subscribe' :class='[this.status, isOnArticleSubscribe ? "-on-article" : "-on-list" ]'>
    <h2 class="title">{{$themeLocaleConfig.data.Article.SubscribeTitle}}</h2>
    <div class='form'>
      <Subscribe />
    </div> 
    <div class='overlay'>
      <div class='loader'>
        <div class='j-loader -white'>
          <div class='dot -first' />
          <div class='dot -second' />
          <div class='dot -third' />
        </div>
      </div>
      <div class='success'>{{$themeLocaleConfig.data.Article.SubscribeSuccess}} </div>
      <div class='error'>
        <div class='msg'>{{$themeLocaleConfig.data.Article.SubscribeErrorMsg}}</div>
        <button class='j-button -border-white-bg -w-limit-158' @click='retrySending'>{{$themeLocaleConfig.data.Article.SubscribeErrorButton}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/Utils/EventBus.js';
import Subscribe from '@/components/Forms/Subscribe/Subscribe.vue'
export default {
  name: 'ArticlesSubscribe',
  components: {
    Subscribe
  },
  props: {
    isOnArticleSubscribe: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      status: '-initial'
    }
  },
  methods: {
    retrySending() {
      this.status = '-initial'
      EventBus.$emit('retrySending', this.status)
    }
  },
  created() {
    EventBus.$on('subscribeForm', data => {            
      this.status = data
    })
  },
  beforeDestroy() {
    EventBus.$off('subscribeForm')
  },
}
</script>


<style lang="scss">
  @import './articlesSubscribe.scss';
</style>

