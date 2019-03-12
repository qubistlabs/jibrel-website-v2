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
    <section class='section-content -bg-dark'>
      <div class='container -offset-top -offset-bottom _container-fix'>
        <div class='card-tile -inner-border-separator -inner-border-white -inner-border-vertical'>
          <div class='item -four-col' data-aos="fade-down" data-aos-duration="300" data-aos-delay="150"> 
            <div class='box -white -padding-small'>
              <div class='img '>
                <img src='@/assets/img/general/icon/zug-w.svg' class='icon' width='60' height='60' alt='icon'>
              </div>
              <h2 class='title '>Zug</h2>
              <p class='descr '>Baarerstrasse 10, 6302 <br>Canton of Zug, Switzerland</p>
            </div>
          </div>
          <div class='item -four-col' data-aos="fade-down" data-aos-duration="600" data-aos-delay="150"> 
            <div class='box -white -padding-small'>
              <div class='img '>
                <img src='@/assets/img/general/icon/new-york-w.svg' class='icon' width='60' height='60' alt='icon'>
              </div>
              <h2 class='title '>New York</h2>
              <p class='descr '>135 Madison Avenue, <br>10016 NY, United States </p>
            </div>
          </div>
          <div class='item -four-col' data-aos="fade-down" data-aos-duration="900" data-aos-delay="150"> 
            <div class='box -white -padding-small'>
              <div class='img '>
                <img src='@/assets/img/general/icon/peters-w.svg' class='icon' width='60' height='60' alt='icon'>
              </div>
              <h2 class='title '>St. Petersburg</h2>
              <p class='descr '>Nevsky Avenue, 153 <br>St. Petersburg 191167, Russia  </p>
            </div>
          </div>
          <div class='item -four-col' data-aos="fade-down" data-aos-duration="1200" data-aos-delay="150"> 
            <div class='box -white -padding-small'>
              <div class='img '>
                <img src='@/assets/img/general/icon/dubai-w.svg' class='icon' width='60' height='60' alt='icon'>
              </div>
              <h2 class='title '>Dubai</h2>
              <p class='descr '>Burjuman Business Tower <br>Khalifa Bin Zayed Rd. - Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import JobInfo from '@/components/JobInfo/JobInfo.vue'
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import SectionName from '@/components/base/SectionName/SectionName.vue'
import SupportBox from '@/components/SupportBox/SupportBox.vue'
export default {
  name: 'NewsPae',
  components: {
    JobInfo,
    PageHeader,
    SectionName,
    SupportBox,
  }
}
</script>

<style>

</style>
