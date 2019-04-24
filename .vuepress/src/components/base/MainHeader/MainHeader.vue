<template>
  <div>
    <header class='main-header' :class='isSmall && "-small -bg-white"'>
      <div class='container _container-fluid'>
        <ProjectLogo :colorTheme='colorTheme' animationType='fade-down'/>
        <div class='actions' data-aos='fade-down' data-aos-duration='900' data-aos-delay='150'>
          <SelectLanguage :colorTheme='colorTheme'/>
          <div @click='openMenu'>
          <MenuToggle :colorTheme='colorTheme' />
          </div>
        </div>
      </div>
    </header>
    <ModalWindow :isOpened='isOpened' :isMenu='true' @close="closeMenu()"><MainMenu @close="closeMenu()"/></ModalWindow>
  </div>
</template>


<script>
import MainMenu from './MainMenu/MainMenu.vue'
import MenuToggle from './MenuToggle/MenuToggle.vue'
import SelectLanguage from './SelectLanguage/SelectLanguage.vue'
import ProjectLogo from '@/components/ProjectLogo/ProjectLogo.vue'
import ModalWindow from '@/components/ModalWindow/ModalWindow.vue'
export default {
  name: 'MainHeader',
  components: {
    ProjectLogo,
    MenuToggle,
    SelectLanguage,
    MainMenu,
    ModalWindow,
  },
  props: {
    colorTheme: 'colored' | 'white',
    isSmall: false,
  },
  data() {
    return {
      isOpened: false,
    }
  },
  methods: {
    closeMenu() {
      this.isOpened = false
      this.gtmSend('Menu', 'Close_menu', '')
    },
    openMenu() {
      this.isOpened = true
      this.gtmSend('Menu', 'Open_menu', '')
    },
    gtmSend(category, action, label) {
      this.$gtm.trackView({
        'event': 'AutoEvent',
        'eventCategory': category,
        'eventAction': action,
        'eventLabel': label,
        'eventValue': '',
      });
    }
  }
}
</script>


<style lang='scss'>
  @import './mainHeader';
</style>

