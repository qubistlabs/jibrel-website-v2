<template>
  <nav class='main-menu'>
    <div class='close'>
      <button class='modal-toggle' @click="$emit('close')">
        <svg class="cross -white" width="22.414px" height="22.414px"><use xlink:href="#i-cross"></use></svg>
      </button>
    </div>
    <div class='container'>
      <div class='box'>
        <div class='name'>{{this.$themeLocaleConfig.data.ProjectMenu.Products}}</div>
        <div class='item'>
          <router-link :to='`${this.$localeConfig.path}enterprise.html`' class='link' active-class='-current'>{{this.$themeLocaleConfig.data.ProjectMenu.Enterprise}}</router-link>
        </div>
        <div class='item'>
          <a :href='this.$localeConfig.data.LinkLanguageVersion.jwallet' class='link' target='_blank' >{{this.$themeLocaleConfig.data.ProjectMenu.Jwallet}}</a>
        </div>
        <div class='item'>
          <a :href='this.$localeConfig.data.LinkLanguageVersion.jcash' class='link' target='_blank' >{{this.$themeLocaleConfig.data.ProjectMenu.Jcash}}</a>
        </div>
      </div>
      <div class='box'>
        <div class='name'>{{this.$themeLocaleConfig.data.ProjectMenu.Company}}</div>
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
      <div class='box'>
        <div class='name'>{{this.$themeLocaleConfig.data.ProjectMenu.Contact}}</div>
        <div class='item'>
          <button class='link'>{{this.$themeLocaleConfig.data.ProjectMenu.ContactUs}}</button>
        </div>
        <div class='item'>
          <a href='https://www.facebook.com/jibrelnetwork/' class='link' target='_blank' >{{this.$themeLocaleConfig.data.ProjectMenu.Facebook}}</a>
        </div>
        <div class='item'>
          <a href='https://twitter.com/JibrelNetwork' class='link' target='_blank' >{{this.$themeLocaleConfig.data.ProjectMenu.Twitter}}</a>
        </div>
        <div class='item'>
          <a href='https://www.linkedin.com/company/jibrel-network/' class='link' target='_blank' >{{this.$themeLocaleConfig.data.ProjectMenu.Linkedin}}</a>
        </div>
        <div class='item'>
          <a href='https://medium.com/@jibrelnetwork' class='link' target='_blank'>{{this.$themeLocaleConfig.data.ProjectMenu.Medium}}</a>
        </div>
      </div>
    </div>
    <div class='button'>
      <a href='https://jcash.network/auth/signin' class='j-button -border-on-dark-bg' target='_blank'><span class='text'>{{this.$themeLocaleConfig.data.ProjectMenu.SignIn}}</span></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu',
  watch: {
    $page: function () {      
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
  @import './mainMenu.scss'
</style>
