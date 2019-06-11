<template>
  <div class='articles-subscribe'>
    <SectionName
      title='BLOG'
      positionContainer='bottom-70'
      positionTitle='bottom'
      colorTheme='white'
      arrow='down'
    />
    <div class='container _container-fix'>
      <h1 class="title" data-aos='fade-up' data-aos-duration='600' data-aos-delay='150'>Jibrel: April Update</h1>
      <div class="descr" data-aos='fade-up' data-aos-duration='900' data-aos-delay='150'>Jibrel was recently accepted into the Gulf Bonds and Sukuk Association (GBSA). This is a great milestone in our journey and vision of putting currencies, equities, commodities and other financial assets on the Ethereum blockchain. Not only does the acceptance aid in...</div>
      <div class='form _mobile-hide' data-aos='fade-in' data-aos-duration='1200' data-aos-delay='600'>
        <ProjectForm :isJcashOpen='true' eventType='sign-up-success'/>
      </div>
    </div>
  </div>
</template>

<script>
import SectionName from '@/components/base/SectionName/SectionName.vue'
import ProjectForm from '@/components/ProjectForm/ProjectForm.vue'
export default {
  name: 'ArticlesS',
  components: {
    SectionName,
    ProjectForm
  }
} 
</script>


<style lang="scss">
  @import './articlesSubscribe.scss';
</style>

