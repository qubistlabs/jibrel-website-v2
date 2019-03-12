<template>
  <div class='footer-menu'>
    <div class='box' data-aos='fade-down' data-aos-duration='300' data-aos-delay="150">
      <div class='title'>{{this.$themeLocaleConfig.data.ProjectMenu.Company}}</div>
      <div class='item'>
        <router-link :to='`${this.$localeConfig.path}about.html`' class='link' active-class='-current'>{{this.$themeLocaleConfig.data.ProjectMenu.AboutUs}}</router-link>
      </div>
      <div class='item'>
        <router-link :to='`${this.$localeConfig.path}news/`' class='link' active-class='-current'>{{this.$themeLocaleConfig.data.ProjectMenu.PressMedia}}</router-link>
      </div>
      <div class='item'>
        <router-link :to='`${this.$localeConfig.path}careers/`' class='link' active-class='-current'>{{this.$themeLocaleConfig.data.ProjectMenu.Careers}}</router-link>
      </div>
    </div> 
    <div class='box'  data-aos='fade-down' data-aos-duration='600' data-aos-delay="150">
      <div class='title'>{{this.$themeLocaleConfig.data.ProjectMenu.Products}}</div>
      <div class='item '>
        <router-link :to='`${this.$localeConfig.path}enterprise.html`' class='link' active-class='-current'>{{this.$themeLocaleConfig.data.ProjectMenu.Enterprise}}</router-link>
      </div>
      <div class='item -small-offset-left'>
        <a :href='this.$localeConfig.data.LinkLanguageVersion.jwallet' class='link' target='_blank' >{{this.$themeLocaleConfig.data.ProjectMenu.Jwallet}}</a>
      </div>
      <div class='item -small-offset-left'>
        <a :href='this.$localeConfig.data.LinkLanguageVersion.jcash' class='link' target='_blank' >{{this.$themeLocaleConfig.data.ProjectMenu.Jcash}}</a>
      </div>
    </div>
    <div class='box'  data-aos='fade-down' data-aos-duration='900' data-aos-delay="150">
      <div class='title'>{{this.$themeLocaleConfig.data.ProjectMenu.Contact}}</div>
      <div class='item'>
        <button class='link' type='button' @click='modalOpen'>{{this.$themeLocaleConfig.data.ProjectMenu.GetInTouch}}</button>
      </div>
    </div>
    <div class='box' data-aos='fade-down' data-aos-duration='1200' data-aos-delay="150">
      <div class='title'>{{this.$themeLocaleConfig.data.ProjectMenu.Social}}</div>
      <CircleSocial />
    </div>
  </div>
</template>

<script>
import CircleSocial from '@/components/CircleSocial/CircleSocial.vue'
export default {
  name: 'FooterMenu',
  components: {
    CircleSocial,
  },
  methods: {
    modalOpen() {
      this.$emit('open')
    }
  },
}
</script>

<style lang="scss">
  @import './footerMenu';
</style>

