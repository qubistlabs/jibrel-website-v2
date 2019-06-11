<template>
  <router-link to='/blog/' class='back-link'>
    <SpriteIcon name='arr-l' class='icon -mobile-hide'/>
  </router-link>
</template>

<script>
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
export default {
  name: 'BackLink',
  components: {
    SpriteIcon
  },
}
</script>

<style lang="scss">
  @import './backLink';
</style>
