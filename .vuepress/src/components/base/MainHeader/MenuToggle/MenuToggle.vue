<template>
  <button class='menu-toggle' :class='`-${colorTheme}`'>
    <span class='text'>{{this.$themeLocaleConfig.data.ProjectMenu.menu}}</span>
    <svg class="icon -mobile-hide" width="24" height="24"><use xlink:href="#i-menu"></use></svg>
    <div class='hamburger'></div>
  </button>
</template>

<script>
export default {
  name: 'MenuToggle',
  props: {
    colorTheme: 'colored' | 'white'
  },
}
</script>

<style lang="scss">
  @import './menuToggle';
</style>
