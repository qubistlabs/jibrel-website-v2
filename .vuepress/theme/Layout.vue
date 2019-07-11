<template>
  <div>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=[__GTM_ID__]"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <!-- <SpriteIcon /> -->
    <MainHeader :colorTheme='getHeaderColor()' :isSmall='headerSize' @open="modalOpen" />
    <Content v-if='typePage === "precast-page"'/>
    <News v-if='typePage === "/news/"' > <Content /> </News>
    <Vacancy v-if='typePage === "/careers/"' > <Content /> </Vacancy>
    <Article v-if='typePage === "/blog/"' > <Content /> </Article>
    <MainFooter @open="modalOpen"/>
    <MobileFooter />
    <ModalWindow :isOpened='isOpened' @close="isOpened=false">
      <div class="container -center-box _container-fix aos-init aos-animate" data-aos="fade-in" data-aos-duration="900" data-aos-delay="150">
        <ProjectForm
          @close="isOpened=false"
          eventType='get-in-touch'
          formName='message'
          :title='$themeLocaleConfig.data.FormText.baseForm.titleSendMessage'
        />
      </div>
    </ModalWindow>
  </div>
</template>
<script>
import Vue from 'vue'
import Meta from 'vue-meta'
import SocialSharing from 'vue-social-sharing'
import AOS from 'aos'
import 'aos/dist/aos.css'

import News from '@/pages/News.vue'
import Vacancy from '@/pages/Vacancy.vue'
import Article from '@/pages/Article.vue'
import MainHeader from '@/components/base/MainHeader/MainHeader.vue'
import MainFooter from '@/components/base/MainFooter/MainFooter.vue'
import MobileFooter from '@/components/base/MobileFooter/MobileFooter.vue'
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
import ModalWindow from '@/components/ModalWindow/ModalWindow.vue'
import ProjectForm from '@/components/Forms/ProjectForm/ProjectForm.vue'

import VueGtm from 'vue-gtm'
import VueYandexMetrika from 'vue-yandex-metrika'

Vue.use(Meta)
Vue.use(SocialSharing);

export default {
  components: {
    MainHeader,
    MainFooter,
    MobileFooter,
    SpriteIcon,
    News,
    Vacancy,
    Article,
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
      } else if (!this.$page.frontmatter.index && route.indexOf(/blog/) !== -1){
        this.typePage = '/blog/'
      } else {
        this.typePage = 'precast-page'
      }
    },
    getHeaderSize() {
      const route = this.$route.path
      if (
        route.indexOf(/news/) !== -1 ||
        route.indexOf(/careers/) !== -1 ||
        route.indexOf(/blog/) !== -1
      ) {
        this.headerSize = true
      } else {
        this.headerSize = false
      }
    },
    gtmSend() {
      if (this.$gtm) {
        this.$gtm.trackEvent({
          'event': 'virtualPageview',
          'virtualTitle': this.$page.title,
          'virtualUrl': this.$page.path,
          'virtualHost': window.location.hostname,
        });
      }
    },
    ymTracking() {
      if (this.$metrika) {
        this.$metrika.hit(this.$page.path)
      }
    }
  },
  watch: {
    $page: function (newVal) {
      this.getTypePage()
      this.getHeaderSize()
      this.gtmSend()
      this.ymTracking()
    }
  },
  created() {
    this.getTypePage()
    this.getHeaderSize()
  },
  beforeMount() {
     AOS.init({
      disable: "mobile",
      once: true,
    })
  },
  mounted() {    
    Vue.use(VueGtm, {
      id: process.env.GOOGLE_TAG_MANAGER_ID,
      enabled: true,
      debug: process.env.NODE_ENV === 'development',
      vueRouter: this.$router,
    })
    Vue.use(VueYandexMetrika, {
      id: process.env.YANDEX_METRIKA_ID,
      env: process.env.NODE_ENV,
      debug: true,
      options: {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      }
    })
    this.gtmSend()
    this.ymTracking()
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/core.scss';
</style>
