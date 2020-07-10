<template>
  <section class='section-content -full-screen -center-child-box -jibrel-com-promo'>
    <SectionName
      :title='$themeLocaleConfig.data.SectionName.welcome'
      positionContainer='bottom-70'
      positionTitle='bottom'
      colorTheme='colored'
      arrow='down'
    />
    <div class='jibrelcom-content'>
      <h1 class='_visibility-hidden'>Jibrel Network</h1>
      <h2
        class='jibrelcom-title'
        v-html="$localeConfig.data['Home.JibrelComPromo.title']"
      />
      <a
        class='jibrelcom-button'
        :href='`https://tokenize.jibrel.network/${jibrelcomlang}`'
        target='_blank'
      >
        {{ $localeConfig.data['Home.JibrelComPromo.action.learnmore'] }}
      </a>
    </div>
  </section>
</template>

<script>
  import SectionName from '@/components/base/SectionName/SectionName.vue'

  export default {
    components: {
      SectionName,
    },
    computed: {
      jibrelcomlang() {
        if (this.$localeConfig.shortLang === 'zh') {
          return 'zh-hans'
        }

        return this.$localeConfig.shortLang
      }
    }
  }
</script>

<style lang='scss'>
  @import './jibrelComPromo.scss';
</style>
