<template>
  <div>
    
  </div>
</template>

<script>

export default {
  name: 'Index',
  methods: {
    findPreferredLanguage(langs) {   
      for (var index = 0; index < langs.length; index++) {      
        return this.cleanUpWithDefault(langs[index])
      }
    },
    cleanUpWithDefault(lang) {
      switch (lang.slice(0, 2)) {
        case 'en': return 'en'
        case 'ko': return 'ko'
        case 'zh': return 'zh'
        default: return 'en'
      }
    },
    getLanguages() {
      if (window.navigator.languages) {
        return this.findPreferredLanguage(window.navigator.languages)
      }
      if (window.navigator.browserLanguage) {
        return this.cleanUpWithDefault(window.navigator.browserLanguage)
      }
      if (window.navigator.language) {
        return this.cleanUpWithDefault(window.navigator.language)
      }
      return 'en'
    },
    redirectPath() {
      this.$router.addRoutes([
        { path: '/', redirect: `/${this.getLanguages()}/`},
      ])
    },
  },
  created() {
    this.redirectPath()
  },
}
</script>
