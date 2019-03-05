<template>
  <footer class='main-footer'>
    <div class='container _container-fix'>
      <div class='top'>
        <div class='logo'>
          <a href='/' class='project-logo -color' data-aos='fade-in' data-aos-duration='600' data-aos-delay="150">
            <svg class="icon" width="41.534px" height="45.558px"><use xlink:href="#logo-icon"></use></svg>
            <svg class="text" width="68.829px" height="26.945px"><use xlink:href="#logo-text"></use></svg>
          </a>
        </div>
        <div class='navigation'>
          <FooterMenu />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterMenu from '@/components/FooterMenu/FooterMenu.vue'
export default {
  name: 'MainFooter',
  components: {
    FooterMenu,
  },
}
</script>


<style lang="scss">
  @import './mainFooter.scss';
</style>
