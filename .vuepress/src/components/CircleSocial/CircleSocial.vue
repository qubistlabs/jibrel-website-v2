<template>
  <div class='circle-social'>
    <a href='https://www.facebook.com/jibrelnetwork/' target='_blank' class='link'>
      <SpriteIcon name='s-c-facebook' class='icon'/>
    </a>
    <a href='https://twitter.com/JibrelNetwork' target='_blank' class='link'>
      <SpriteIcon name='s-c-twitter' class='icon'/>
    </a>
    <a href='https://www.linkedin.com/company/jibrel-network/' class='link' target='_blank'>
      <SpriteIcon name='s-c-linkedin' class='icon'/>
    </a>
    <a href='https://medium.com/@jibrelnetwork' class='link' target='_blank'>
      <SpriteIcon name='s-c-medium' class='icon'/>
    </a>
    <a href='https://t.me/jibrel_network' class='link' target='_blank'>
      <SpriteIcon name='s-c-telegram' class='icon'/>
    </a>
  </div>
</template>

<script>
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
export default {
  name: 'CircleSocial',
  components: {
    SpriteIcon
  },
}
</script>

<style lang='scss'>
  @import './circleSocial.scss';
</style>
