<template>
  <nav class='main-menu'>
    <div class='close'>
      <button class='modal-toggle' @click='closeMenu'>
        <SpriteIcon name='i-cross' class='cross -white'/>
      </button>
    </div>
    <div class='container'>
      <div class='box'>
        <div class='name'>{{this.$themeLocaleConfig.data.ProjectMenu.Products}}</div>
        <div class='item'>
          <router-link :to='`${this.$localeConfig.path}enterprise/`' @click.native='clickLink("Enterprise", "enterprise/")' class='link' active-class='-current'>
            {{this.$themeLocaleConfig.data.ProjectMenu.Enterprise}}
          </router-link>
        </div>
        <div class='item'>
          <a :href='this.$localeConfig.data.LinkLanguageVersion.jwallet' @click='clickLink("Jwallet")' class='link' target='_blank' >
            {{this.$themeLocaleConfig.data.ProjectMenu.Jwallet}}
          </a>
        </div>
        <div class='item'>
          <a :href='this.$localeConfig.data.LinkLanguageVersion.jcash' @click='clickLink("Jcash")' class='link' target='_blank'>
            {{this.$themeLocaleConfig.data.ProjectMenu.Jcash}}
          </a>
        </div>
      </div>
      <div class='box'>
        <div class='name'>{{this.$themeLocaleConfig.data.ProjectMenu.Company}}</div>
        <div class='item'>
          <router-link :to='`${this.$localeConfig.path}about/`' @click.native='clickLink("AboutUs", "about/")' class='link' active-class='-current'>
            {{this.$themeLocaleConfig.data.ProjectMenu.AboutUs}}
          </router-link>
        </div>
        <div class='item'>
          <router-link :to='`${this.$localeConfig.path}news/`' @click.native='clickLink("PressMedia", "news/")' class='link' active-class='-current'>
            {{this.$themeLocaleConfig.data.ProjectMenu.PressMedia}}
          </router-link>
        </div>
        <div class='item'>
          <router-link :to='`${this.$localeConfig.path}careers/`' @click.native='clickLink("Careers", "careers/")' class='link' active-class='-current'>
            {{this.$themeLocaleConfig.data.ProjectMenu.Careers}}
          </router-link>
        </div>
        <div class='item' v-if="this.$localeConfig.path === '/'">
          <router-link to='/blog/' @click.native='clickLink("Blog", "blog/")' class='link' active-class='-current'>
            {{this.$themeLocaleConfig.data.ProjectMenu.Blog}}
          </router-link>
        </div>
      </div>
      <div class='box'>
        <div class='name'>{{this.$themeLocaleConfig.data.ProjectMenu.Contact}}</div>
        <div class='item'>
          <button class='link' @click='modalOpen'>{{this.$themeLocaleConfig.data.ProjectMenu.ContactUs}}</button>
        </div>
        <div class='item'>
          <a 
            href='https://www.facebook.com/jibrelnetwork/'
            class='link'
            target='_blank' 
            @click='clickLink("Facebook", "close")'
          >
            {{this.$themeLocaleConfig.data.ProjectMenu.Facebook}}
          </a>
        </div>
        <div class='item'>
          <a 
            href='https://twitter.com/JibrelNetwork'
            class='link'
            target='_blank' 
            @click='clickLink("Twitter", "close")'
          >
            {{this.$themeLocaleConfig.data.ProjectMenu.Twitter}}
          </a>
        </div>
        <div class='item'>
          <a 
            href='https://www.linkedin.com/company/jibrel-network/'
            class='link'
            target='_blank' 
            @click='clickLink("Linkedin", "close")'
          >
            {{this.$themeLocaleConfig.data.ProjectMenu.Linkedin}}
          </a>
        </div>
        <div class='item'>
          <a 
            href='https://medium.com/@jibrelnetwork'
            class='link'
            target='_blank' 
            @click='clickLink("Medium", "close")'
          >
            {{this.$themeLocaleConfig.data.ProjectMenu.Medium}}
          </a>
        </div>
        <div class='item'>
          <a 
            href='https://open.kakao.com/o/gxNSV4pb'
            class='link'
            target='_blank' 
            @click='clickLink("KakaoTalk", "close")'
          >
            {{this.$themeLocaleConfig.data.ProjectMenu.KakaoTalk}}
          </a>
        </div>
      </div>
    </div>
    <div class='button'>
      <a href='https://jcash.network/auth/signin' class='j-button -border-on-dark-bg' target='_blank'><span class='text'>{{this.$themeLocaleConfig.data.ProjectMenu.SignIn}}</span></a>
    </div>
  </nav>
</template>

<script>
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
export default {
  name: 'MainMenu',
  components: {
    SpriteIcon
  },
  methods: {
    modalOpen() {
      this.$emit('open')
    },
    closeMenu() {
      this.$emit('close')
    },
    clickLink(label, param) {            
      if (param === 'close' || this.$localeConfig.path + param === this.$route.path) {
        this.$emit('close')
      }
      this.gtmSend('Menu', 'GoTo', this.$themeLocaleConfig.data.ProjectMenu[label])
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
  },
  watch: {
    $page: function () {      
      this.$emit('close')
    }
  },
}
</script>

<style lang="scss">
  @import './mainMenu.scss'
</style>
