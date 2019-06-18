<template>
  <div class="more-post">
    <button class="j-button -fill-on-white-bg" @click="loadMore()">Show More Posts</button>
  </div>
</template>

<script>
import EventBus from '@/Utils/EventBus.js';
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
export default {
  name: 'MorePost',
  data() {
    return {
      limit: 6,
      multiplier: 6
    }
  },
  methods: {
    loadMore() {
      this.multiplier += this.limit
      EventBus.$emit('load-limit', this.multiplier)
    }
  }
}
</script>

<style lang="scss">
  @import './morePost';
</style>
