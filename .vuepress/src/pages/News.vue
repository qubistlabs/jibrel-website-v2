<template>
  <div>
    <PageHeader typePage='news' :title='this.$themeLocaleConfig.data.PageHeader.backToNews' />
    <section class='section-content -bg-gray'>
      <SectionName
        :title='this.$themeLocaleConfig.data.SectionName.news'
        positionContainer='bottom-460'
        positionTitle='top'
        colorTheme='colored'
        arrow='up'
      />
      <div class='container _container-fix-small -offset-bottom-small -bg-white -mobile-bg-gray'>
        <div class='typo-page'>
          <time
                  class='date'
                  :datetime='this.$page.frontmatter.date'
          >
            {{ this.$page.frontmatter.date | formatDate }}
          </time>
          <div class='header'>
            <h1 class='title'>{{this.$page.frontmatter.title}}</h1>
          </div>
          <div class='wysiwyg'>
            <slot />
          </div>
            <a :href='this.$page.frontmatter.source.url' class='source' target='_blank' rel='nofollow'>{{this.$themeLocaleConfig.data.ProjectNews.link}}
              <svg class="icon" width="16" height="16"><use xlink:href="#i-external-link"></use></svg>
            </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MetaInfo from '@/Utils/MetaInfo.js'

import PageHeader from '@/components/PageHeader/PageHeader.vue'
import SectionName from '@/components/base/SectionName/SectionName.vue'
export default {
  name: 'NewsPage',
  components: {
    PageHeader,
    SectionName,
  },
  metaInfo () {
    return MetaInfo(
      this.$route.path,
      `News - ${this.$page.frontmatter.title}`,
      this.$page.frontmatter.description
    )
  },
  mounted() {
    const twitterWidgetsAPI = document.createElement('script')
    twitterWidgetsAPI.setAttribute('src', '//platform.twitter.com/widgets.js')
    document.head.appendChild(twitterWidgetsAPI)
  },
}
</script>

<style>

</style>
