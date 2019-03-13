<template>
  <div>
    <section class='section-content -offset-page -bg-gray'>
      <SectionName
        :title='$themeLocaleConfig.data.SectionName.vacansies'
        positionContainer='bottom-70'
        positionTitle='bottom'
        colorTheme='colored'
        arrow='up'
      />
      <div class='container _container-fix-small -bg-white -mobile-bg-gray'>
        <ListVacancies />
      </div>
    </section>
    <section class='section-content -bg-gray -mobile-bg-white -offset-bottom'>
      <div class='container _container-fix-small -bg-white'>
        <SupportBox 
          mail='careers@jibrel.network'
          descr='Can’t find a suitable position? Send us your resume and we’ll see where you fit!'
        />
      </div>
    </section>
    <ContactsList isWhite='true'/>
  </div>
</template>


<script>
  import ListVacancies from '@/components/ListVacancies/ListVacancies.vue'
  import SupportBox from '@/components/SupportBox/SupportBox.vue'
  import SectionName from '@/components/base/SectionName/SectionName.vue'
  import ContactsList from '@/components/ContactsList/ContactsList.vue'
  export default {
    name: 'Careers',
    components: {
      ListVacancies,
      SupportBox,
      SectionName,
      ContactsList,
    },
  };
</script>