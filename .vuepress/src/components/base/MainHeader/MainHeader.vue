<template>
  <div>
    <header class='main-header' :class='isSmall && "-small -bg-white"'>
      <div class='container _container-fluid'>
        <ProjectLogo :colorTheme='colorTheme' animationType='fade-down'/>
        <div class='actions'>
          <SelectLanguage :colorTheme='colorTheme' v-if="this.$route.path.indexOf('/blog/') === -1"/>
          <div @click='openMenu'>
            <MenuToggle :colorTheme='colorTheme' />
          </div>
        </div>
      </div>
    </header>
    <ModalWindow :isOpened='isOpened' :isMenu='true' @close="closeMenu()"><MainMenu @close="closeMenu()" @open="modalOpen"/></ModalWindow>
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
    isShowBack: false,
  },
  data() {
    return {
      isOpened: false,
    }
  },
  methods: {
    modalOpen() {
      this.$emit('open')
    },
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

