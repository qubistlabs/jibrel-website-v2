<template>
  <button class='menu-toggle' :class='`-${colorTheme}`'>
    <span class='text'>{{this.$themeLocaleConfig.data.ProjectMenu.menu}}</span>
    <SpriteIcon name='i-menu' class='icon -mobile-hide'/>
    <div class='hamburger'></div>
  </button>
</template>

<script>
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
export default {
  name: 'MenuToggle',
  components: {
    SpriteIcon
  },
  props: {
    colorTheme: 'colored' | 'white'
  },
}
</script>

<style lang="scss">
  @import './menuToggle';
</style>
