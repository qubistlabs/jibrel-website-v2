<template>
  <footer class='main-footer'>
    <div class='container _container-fix'>
      <div class='top'>
        <div class='logo'>
          <ProjectLogo colorTheme='colored' animationType='fade-in'/>
        </div>
        <div class='navigation'>
          <FooterMenu @open="modalOpen"/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterMenu from '@/components/FooterMenu/FooterMenu.vue'
import ProjectLogo from '@/components/ProjectLogo/ProjectLogo.vue'
export default {
  name: 'MainFooter',
  components: {
    FooterMenu,
    ProjectLogo,
  },
  methods: {
    modalOpen() {
      this.$emit('open')
    }
  }
}
</script>


<style lang="scss">
  @import './mainFooter.scss';
</style>
