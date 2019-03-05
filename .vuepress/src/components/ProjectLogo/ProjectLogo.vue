<template>
  <router-link to='/' class='project-logo' :class='`-${color}`' data-aos="fade-down" data-aos-duration="600" data-aos-delay="150">
    <svg class="icon" width="41.534px" height="45.558px"><use xlink:href="#logo-icon"></use></svg>
    <svg class="text" width="68.829px" height="26.945px"><use xlink:href="#logo-text"></use></svg>
  </router-link>
</template>

<script>
export default {
  name: 'ProjectLogo',
  props: {
    color: 'color' | 'white'
  },
}
</script>

<style lang="scss">
  @import './projectLogo';
</style>
