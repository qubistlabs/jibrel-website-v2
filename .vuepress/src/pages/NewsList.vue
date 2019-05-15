<template>
  <div>
    <section class='section-content -offset-page -offset-bottom -bottom-separator -bg-gray'>
      <SectionName
          :title='$themeLocaleConfig.data.SectionName.news'
          positionContainer='bottom-460'
          positionTitle='bottom'
          colorTheme='colored'
          arrow='up'
        />
      <div class='container _container-fix'>
        <NewsPreviews />
      </div>
    </section>
    <section class='section-content -offset-top -offset-bottom -bg-dark'>
      <div class='container -center-box _container-fix' data-aos='fade-in' data-aos-duration='900' data-aos-delay='150'>
        <ProjectForm 
          eventType='request-media'
          formName='enquiry'
          :title='$themeLocaleConfig.data.FormText.baseForm.titleMediaAndPR'
        />
      </div>
    </section>
  </div>
</template>


<script>
  import MetaInfo from '@/Utils/MetaInfo.js'
  import SectionName from '@/components/base/SectionName/SectionName.vue'
  import NewsPreviews from '@/components/NewsPreviews/NewsPreviews.vue'
  import ProjectForm from '@/components/ProjectForm/ProjectForm.vue'
  export default {
    components: {
      SectionName,
      NewsPreviews,
      ProjectForm,
    },
    metaInfo () {
      return MetaInfo(
        this.$route.path,
        this.$page.frontmatter.title,
      )
    },
  };
</script>