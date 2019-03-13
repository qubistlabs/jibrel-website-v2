<template>
  <div class='select-language -in-header' :class='{"-open": isOpened}'>
    <button class='toggle' @click='isOpened = true'>
      <span class='current' :class='`-${colorTheme}`'>{{language.current}}</span>
      <svg class='icon' :class='`-${colorTheme}`' width='7.5px' height='4.5px'><use xlink:href='#i-che-b'></use></svg>
    </button>
    <div class='overlay' @click='isOpened = false'></div>
    <div class='drop'>
      <router-link
        class='item'
        active-class='-current'
        :to='item.link'
        :exact='true'
        :key='item.text'
        v-for='item in language.items'
        @click='isOpened = false'
      >
        {{ item.text }}
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'SelectLanguage',
  data() {
    return {
      isOpened: false,
      currentLanguage: String
    }
  },
  props: {
    colorTheme: 'colored' | 'white'
  },
  computed: {
    language () {
      const locales = this.$site.themeConfig.locales      
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        return {
          current: this.$themeLocaleConfig.selectText,
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = locale.selectText
            let link
            if (locale.selectText === this.$selectText) {
              link = currentLink
            } else {
              link = currentLink.replace(this.$localeConfig.path, path)
              // if (!routes.some(route => route.path === link)) {
              //   link = path
              // }
            }
            return { text, link }
          })
        }
      }
    },
  },
  watch: {
    $page: function (newVal) {
      this.isOpened = false
    }
  }
}

</script>

<style lang="scss">
  @import './selectLanguage';
</style>