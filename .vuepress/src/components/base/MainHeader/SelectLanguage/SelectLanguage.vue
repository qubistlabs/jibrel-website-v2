<template>
  <div class='select-language' :class='isOpened && "-open"'>
    <button class='toggle' @click='isOpened = true'>
      <span class='current' :class='`-${colorTheme}`'>{{language.current}}</span>
      <SpriteIcon name='i-che-b' :class='`icon -${colorTheme}`'/>
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
        @click.native="handleClick(item.lang)"
      >
        {{ item.text }}
      </router-link>
    </div>
  </div>
</template>


<script>
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
export default {
  name: 'SelectLanguage',
  components: {
    SpriteIcon
  },
  data() {
    return {
      isOpened: false,
    }
  },
  props: {
    colorTheme: 'colored' | 'white'
  },
  computed: {
    language () {
      const locales = this.$site.themeConfig.locales
      const localesMeta = this.$site.locales
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        return {
          current: this.$themeLocaleConfig.selectText,
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = locale.selectText
            const lang = localesMeta[path].shortLang
            let link
            if (locale.selectText === this.$selectText) {
              link = currentLink
            } else {
              link = currentLink.replace(this.$localeConfig.path, path)
            }
            return { text, link, lang }
          })
        }
      }
    },
  },
  methods: {
    handleClick(lang) {
      this.$cookies.set('lang', lang, '360d')
    }
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
