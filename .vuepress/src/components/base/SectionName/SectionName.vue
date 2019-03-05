<template>
  <div class='section-name' :class='`-${positionContainer}`'>
    <div class='container _container-fluid'>
      <div class='title' 
        :class='[`-${positionTitle}`, `-${color}`]'
        data-aos='fade-up' data-aos-duration='1200' data-aos-delay='150' data-aos-offset='0'
      >
        {{title}}
      </div>
      <svg class='arrow' 
        :class='[`-${color}`, `-${arrow}`]' 
        width='23'
        height='22'
        data-aos='fade-up' data-aos-duration='1500' data-aos-delay='150'
      >
        <use :xlink:href='`#i-arrow-${arrow}`'></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionName',
  props: {
    title: String,
    positionContainer: 'bottom-70' | 'bottom-460' | 'top-0' | 'top-110' | 'center',
    positionTitle: 'bottom' | 'top',
    color: 'white' | 'color',
    arrow: 'up' | 'down',
    isAnimation: false,
  }
}
</script>


<style lang="scss">
  @import './sectionName.scss';
</style>

