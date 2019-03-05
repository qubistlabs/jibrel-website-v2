<template>
  <div class='section-content -popup -full-screen -center-child-box -bg-menu' :class='[hide && "-hide", animationHide && "-animation-hide"]'>
    <div class='overlay' @click="$emit('close')"></div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ModalWindow',
  props: {
    isOpened: false,
  },
  data() {
    return {
      hide: true,
      animationHide: true,
    }
  },
  watch: {
    isOpened: function (newVal) {
      if (newVal) {
        this.hide = false
        setTimeout(() => {
          this.animationHide = false
        }, 10)
      } else {
        this.animationHide = true
        setTimeout(() => {
          this.hide = true
        }, 200)
      }
    }
  }
}
</script>
