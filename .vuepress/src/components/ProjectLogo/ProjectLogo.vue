<template>
  <router-link :to='this.$localeConfig.path' class='project-logo' 
    :class='[`-${colorTheme}`, animationType === "fade-down" && `-${animationType}`]'
      :data-aos='animationType === "fade-up" && `-${animationType}`'
      data-aos-duration="600"
      data-aos-delay="150">
    <SpriteIcon name='logo-icon' class='icon'/>
    <SpriteIcon name='logo-text' class='text'/>
  </router-link>
</template>

<script>
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
export default {
  name: 'ProjectLogo',
  components: {
    SpriteIcon
  },
  props: {
    colorTheme: 'colored' | 'white',
    animationType: 'fade-down' | 'fade-in'
  },
}
</script>

<style lang="scss">
  @import './projectLogo';
</style>
