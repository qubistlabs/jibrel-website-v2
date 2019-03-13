<template>
  <div>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=[__GTM_ID__]"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <SpriteIcon />
    <MainHeader :colorTheme='getHeaderColor()' :isSmall='headerSize' />
    <Content v-if='typePage === "precast-page"'/>
    <News v-if='typePage === "/news/"' > <Content /> </News>
    <Vacancy v-if='typePage === "/careers/"' > <Content /> </Vacancy>
    <MainFooter @open="modalOpen"/>
    <ModalWindow :isOpened='isOpened' @close="isOpened=false">
      <div class="container -center-box _container-fix aos-init aos-animate" data-aos="fade-in" data-aos-duration="900" data-aos-delay="150">
        <ProjectForm 
          @close="isOpened=false"
          eventType='product-and-sale-enterprise'
          formName='message'
          :title='$themeLocaleConfig.data.FormText.baseForm.titleSendMessage'
        />
      </div>
    </ModalWindow>
  </div>
</template>
<script>
import Vue from 'vue'
import AOS from 'aos'
import News from '@/pages/News.vue'
import Vacancy from '@/pages/Vacancy.vue'
import MainHeader from '@/components/base/MainHeader/MainHeader.vue'
import MainFooter from '@/components/base/MainFooter/MainFooter.vue'
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
import ModalWindow from '@/components/ModalWindow/ModalWindow.vue'
import ProjectForm from '@/components/ProjectForm/ProjectForm.vue'


export default {
  components: {
    MainHeader,
    MainFooter,
    SpriteIcon,
    News,
    Vacancy,
    ModalWindow,
    ProjectForm,
  },
  data() {
    return {
      typePage: String,
      headerSize: String,
      isOpened: false,
    }
  },
  methods: {
    modalOpen() {
      this.isOpened = true
    },
    getHeaderColor() {     
      if (this.$page.frontmatter.headerColor) {
        return 'white';
      }
      return 'colored';
    },
    getTypePage() {
      const route = this.$route.path
      if (route !== `${this.$localeConfig.path}news/` && route.indexOf(/news/) !== -1) {
        this.typePage = '/news/'
      } else if (route !== `${this.$localeConfig.path}careers/` && route.indexOf(/careers/) !== -1) {
        this.typePage = '/careers/'
      } else {
        this.typePage = 'precast-page'
      }
    },
    getHeaderSize() {
      const route = this.$route.path
      if (route.indexOf(/news/) !== -1 || route.indexOf(/careers/) !== -1) {
        this.headerSize = true
      } else {
        this.headerSize = false
      }
    },
  },
  watch: {
    $page: function (newVal) {
      this.getTypePage()
      this.getHeaderSize()
    }
  },
  created() {    
    this.getTypePage()
    this.getHeaderSize()
    // AOS.init({
    //   disable: 'mobile',
    // })
  },
};
</script>

<style lang="scss">
  @import '@/assets/scss/core.scss'
</style>
