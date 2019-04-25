<template>
  <div class='section-content -popup -full-screen -center-child-box' 
    :class='[
      hide && "-hide",
      animationHide && "-animation-hide",
      isMenu ? "-bg-menu" : "-bg-black-gradient"
    ]'
  >
    <div class='overlay' @click="isMenu ? $emit('close') : null"></div>
    <header class="main-header" v-if="!isMenu">
      <div class="container _container-fluid -reverce">
        <div class="actions aos-init aos-animate" data-aos="fade-down" data-aos-duration="900" data-aos-delay="150">
          <button class="modal-toggle" @click="$emit('close')">
            <SpriteIcon name='i-cross' class='cross -white'/>
          </button>
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>

<script>
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
export default {
  name: 'ModalWindow',
  components: {
    SpriteIcon
  },
  props: {
    isMenu: false,
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
