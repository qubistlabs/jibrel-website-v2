<template>
  <div class='section-name' :class='`-${positionContainer}`'>
    <div class='container _container-fluid'>
      <div class='title' 
        :class='[`-${positionTitle}`, `-${colorTheme}`]'
        data-aos='fade-up' data-aos-duration='1200' data-aos-delay='150' data-aos-offset='0'
      >
        {{title}}
      </div>
      <div :class='[`arrow -${colorTheme}`, `-${arrow}`]' @click='scrollTo(arrow)'>
        <SpriteIcon :name='`i-arrow-${arrow}`' />
      </div>
    </div>
  </div>
</template>

<script>
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
export default {
  name: 'SectionName',
  components: {
    SpriteIcon
  },
  props: {
    title: String,
    positionContainer: 'bottom-70' | 'bottom-460' | 'top-0' | 'top-110' | 'center',
    positionTitle: 'bottom' | 'top',
    colorTheme: 'white' | 'colored',
    arrow: 'up' | 'down',
    isAnimation: false,
  },
  methods: {
    scrollTo(direction) {
      window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': direction === 'up' ? 0 : window.innerHeight
      });
    }
  }
}
</script>


<style lang="scss">
  @import './sectionName.scss';
</style>

