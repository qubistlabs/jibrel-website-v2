<template>
  <footer class='mobile-footer'>
    <div class='container _container-fix'>
      <div class='soc'>
        <CircleSocial />
      </div>
    </div>
  </footer>

</template>

<script>
import CircleSocial from '@/components/CircleSocial/CircleSocial.vue'
export default {
  name: 'MobileFooter',
  components: {
    CircleSocial
  }
}
</script>

<style lang='scss'>
  @import './mobileFooter.scss'
</style>
