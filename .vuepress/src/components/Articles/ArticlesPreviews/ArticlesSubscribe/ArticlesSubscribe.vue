<template>
  <div class='articles-subscribe'>
    <h2 class="title" data-aos='fade-up' data-aos-duration='600' data-aos-delay='150'>Sign up to receive Jibrel updatese</h2>
    <div class='form' data-aos='fade-in' data-aos-duration='1200' data-aos-delay='600'>
      <ProjectForm :isJcashOpen='true' eventType='sign-up-success' templateForm='subscribe'/>
    </div>
  </div>
</template>

<script>
import ProjectForm from '@/components/ProjectForm/ProjectForm.vue'
export default {
  name: 'ArticlesSubscribe',
  components: {
    ProjectForm
  }
} 
</script>


<style lang="scss">
  @import './articlesSubscribe.scss';
</style>

