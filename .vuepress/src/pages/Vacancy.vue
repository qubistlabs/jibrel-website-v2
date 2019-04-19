<template>
  <div>
    <PageHeader typePage='careers' :title='this.$themeLocaleConfig.data.PageHeader.backToCareers' />
    <section class='section-content -bg-gray'>
      <SectionName
        :title='this.$themeLocaleConfig.data.SectionName.vacancy'
        positionContainer='bottom-460'
        positionTitle='top'
        colorTheme='colored'
        arrow='up'
      />
      <div class='container _container-fix-small -bg-white -mobile-bg-gray'>
        <div class='typo-page'>
          <div class='header'>
            <h1 class='title'>{{this.$page.frontmatter.title}}</h1>
            <div class="data">
              <div class="button _mobile-hide">
                <a href="mailto:careers@jibrel.network" class="j-button -big-offset -border-on-white-bg" target='_blank'><span class='text'>Apply Now</span></a>
              </div>
            </div>
          </div>
          <JobInfo 
            :time='this.$page.frontmatter.time'
            :place='this.$page.frontmatter.place'
          />
          <div class='wysiwyg'>
            <slot />
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -bg-gray -mobile-bg-white -offset-bottom'>
      <div class='container _container-fix-small -bg-white'>
        <SupportBox 
          mail='careers@jibrel.network'
          descr='Apply for the position'
        />
      </div>
    </section>
    <ContactsList isWhite='true'/>
  </div>
</template>

<script>
import MetaInfo from '@/Utils/MetaInfo.js'
import JobInfo from '@/components/JobInfo/JobInfo.vue'
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import SectionName from '@/components/base/SectionName/SectionName.vue'
import SupportBox from '@/components/SupportBox/SupportBox.vue'
import ContactsList from '@/components/ContactsList/ContactsList.vue'
export default {
  name: 'Vacancy',
  components: {
    JobInfo,
    PageHeader,
    SectionName,
    SupportBox,
    ContactsList,
  },
  metaInfo () {
    return MetaInfo(
      this.$route.path,
      `Vacancy - ${this.$page.frontmatter.title}`,
      this.$page.frontmatter.description
    )
  },
}
</script>

<style>

</style>
