<template>
  <div>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=[__GTM_ID__]"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <!-- <SpriteIcon /> -->
    <MainHeader :colorTheme='getHeaderColor()' :isSmall='headerSize' />
    <Content v-if='typePage === "precast-page"'/>
    <News v-if='typePage === "/news/"' > <Content /> </News>
    <Vacancy v-if='typePage === "/careers/"' > <Content /> </Vacancy>
    <MainFooter @open="modalOpen"/>
    <MobileFooter />
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
import Meta from 'vue-meta'
import AOS from 'aos'

import News from '@/pages/News.vue'
import Vacancy from '@/pages/Vacancy.vue'
import MainHeader from '@/components/base/MainHeader/MainHeader.vue'
import MainFooter from '@/components/base/MainFooter/MainFooter.vue'
import MobileFooter from '@/components/base/MobileFooter/MobileFooter.vue'
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
import ModalWindow from '@/components/ModalWindow/ModalWindow.vue'
import ProjectForm from '@/components/ProjectForm/ProjectForm.vue'

import VueGtm from 'vue-gtm'
import VueYandexMetrika from 'vue-yandex-metrika'
// import VueRouter from 'vue-router';
// const router = new VueRouter({ routes, mode, linkActiveClass });

Vue.use(Meta)

export default {
  components: {
    MainHeader,
    MainFooter,
    MobileFooter,
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
    gtmSend() {
      if (this.$gtm) {
        this.$gtm.trackView({
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
    // app.AOS = new AOS.init({ disable: "mobile" });
  },
  mounted() {
    Vue.use(VueGtm, {
      id: process.env.GOOGLE_TAG_MANAGER_ID,
      enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
      debug: process.env.NODE_ENV === 'development',
      // vueRouter: router, // Pass the router instance to automatically sync with router (optional)
      // ignoredViews: ['homepage'] // If router, you can exclude some routes name (case insensitive) (optional)
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
