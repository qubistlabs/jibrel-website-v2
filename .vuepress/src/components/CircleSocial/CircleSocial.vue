<template>
  <div class='circle-social'>
    <a 
      href='https://www.facebook.com/jibrelnetwork/'
      class='link'
      target='_blank'
      :title='this.$themeLocaleConfig.data.ProjectMenu.Facebook'
    >
      <SpriteIcon name='s-c-facebook' class='icon'/>
    </a>
    <a 
      href='https://twitter.com/JibrelNetwork'
      target='_blank'
      class='link'
      :title='this.$themeLocaleConfig.data.ProjectMenu.Twitter'
    >
      <SpriteIcon name='s-c-twitter' class='icon'/>
    </a>
    <a 
      href='https://www.linkedin.com/company/jibrel-network/'
      class='link'
      target='_blank'
      :title='this.$themeLocaleConfig.data.ProjectMenu.Linkedin'
    >
      <SpriteIcon name='s-c-linkedin' class='icon'/>
    </a>
    <a 
      href='https://medium.com/@jibrelnetwork'
      class='link'
      target='_blank'
      :title='this.$themeLocaleConfig.data.ProjectMenu.Medium'
    >
      <SpriteIcon name='s-c-medium' class='icon'/>
    </a>
    <a 
      href='https://t.me/jibrel_network'
      class='link'
      target='_blank'
    >
      <SpriteIcon name='s-c-telegram' class='icon'/>
    </a>
    <a 
      href='https://open.kakao.com/o/gxNSV4pb'
      class='link'
      target='_blank'
      :title='this.$themeLocaleConfig.data.ProjectMenu.KakaoTalk'
    >
      <SpriteIcon name='s-c-kakaotalk' class='icon'/>
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
