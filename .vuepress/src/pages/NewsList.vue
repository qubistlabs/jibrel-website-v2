<template>
  <section class='section-content -offset-page -offset-bottom -bottom-separator -bg-gray'>
    <SectionName
        :title='$themeLocaleConfig.data.SectionName.news'
        positionContainer='bottom-70'
        positionTitle='bottom'
        colorTheme='colored'
        arrow='up'
      />
    <div class='container _container-fix'>
      <NewsPreviews />
    </div>
  </section>
</template>


<script>
  import MetaInfo from '@/Utils/MetaInfo.js'
  import SectionName from '@/components/base/SectionName/SectionName.vue'
  import NewsPreviews from '@/components/NewsPreviews/NewsPreviews.vue'
  export default {
    components: {
      SectionName,
      NewsPreviews,
    },
    metaInfo () {
      return MetaInfo(
        this.$route.path,
        'News',
      )
    },
  };
</script>