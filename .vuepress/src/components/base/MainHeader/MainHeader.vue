<template>
  <div>
    <header class='main-header'>
      <div class='container _container-fluid'>
        <ProjectLogo :color='color'/>
        <div class='actions' data-aos='fade-down' data-aos-duration='900' data-aos-delay='150'>
          <SelectLanguage :color='color'/>
          <div @click='isOpened = true'>
          <ModalToggle :color='color' />
          </div>
        </div>
      </div>
    </header>
    <ModalWindow :isOpened='isOpened' @close="isOpened=false"><MainMenu @close="isOpened=false"/></ModalWindow>
  </div>
</template>


<script>
import ProjectLogo from '@/components/ProjectLogo/ProjectLogo.vue'
import SelectLanguage from '@/components/SelectLanguage/SelectLanguage.vue'
import ModalToggle from '@/components/ModalToggle/ModalToggle.vue'
import MainMenu from '@/components/MainMenu/MainMenu.vue'
import ModalWindow from '@/components/ModalWindow/ModalWindow.vue'
export default {
  name: 'MainHeader',
  components: {
    ProjectLogo,
    ModalToggle,
    SelectLanguage,
    MainMenu,
    ModalWindow,
  },
  props: {
    color: 'color' | 'white'
  },
  data() {
    return {
      isOpened: false,
    }
  },
}
</script>


<style lang='scss'>
  @import './mainHeader';
</style>

