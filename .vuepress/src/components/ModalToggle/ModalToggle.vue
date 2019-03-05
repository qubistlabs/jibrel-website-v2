<template>
  <button class='modal-toggle' :class='`-${color}`'>
    <span class='text'>menu</span>
    <svg class="icon -mobile-hide" width="24" height="24"><use xlink:href="#i-menu"></use></svg>
    <div class='hamburger'></div>
  </button>
</template>

<script>
export default {
  name: 'ModalToggle',
  props: {
    color: 'color' | 'white'
  },
}
</script>

<style lang="scss">
  @import './modalToggle';
</style>
