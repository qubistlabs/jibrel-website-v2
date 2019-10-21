<template>
  <section class='section-content -full-screen -center-child-box -bg-blue-gradient'>
    <SectionName
        :title='$themeLocaleConfig.data.SectionName.welcome'
        positionContainer='bottom-70'
        positionTitle='bottom'
        colorTheme='white'
        arrow='down'
    />
    <div class='container -center-box _container-fix'>
      <div class='preview-info -mobile-offset'>
        <div class='text'>
          <h1 class='_visibility-hidden'>Jibrel Network</h1>
          <h2 class='title -color -white -text-center ' data-aos='fade-up' data-aos-duration='600' data-aos-delay='150'>{{$localeConfig.data.ScreenPreview.homePage.title}}</h2>
          <div class='descr -medium-size -white -color -text-center -box-center' data-aos='fade-up' data-aos-duration='900' data-aos-delay='150'>
            {{$localeConfig.data.ScreenPreview.homePage.description}}
          </div>
        </div>
        <div class='form _mobile-hide' data-aos='fade-in' data-aos-duration='1200' data-aos-delay='600'>
          <ProjectForm :isJcashOpen='true' eventType='sign-up-success' templateForm='jcash'/>
        </div>
      </div>
    </div>
    <div class='button-bottom _mobile-visible'>
      <div class='_container-fix'>
        <a href='https://jcash.network/auth/signup' target='_blank' class='j-button -fill-on-blue-bg'>
          <span class='text'>{{$themeLocaleConfig.data.FormText.emailOnly.button}}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  import SectionName from '@/components/base/SectionName/SectionName.vue'
  import ProjectForm from '@/components/Forms/ProjectForm/ProjectForm.vue'

  export default {
    components: {
      SectionName,
      ProjectForm,
    }
  }
</script>
