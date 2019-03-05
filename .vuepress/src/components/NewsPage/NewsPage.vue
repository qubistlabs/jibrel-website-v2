<template>
  <div>
    <PageHeader typePage='news' />
    <section class='section-content -bg-gray'>
      <SectionName
        title='NEWS'
        positionContainer='bottom-460'
        positionTitle='top'
        color='color'
        arrow='up'
      />
      <div class='container _container-fix-small -offset-bottom-small -bg-white -mobile-bg-gray'>
        <div class='typo-page'>
          <div class='date'>Dec. 01, 2017</div>
          <div class='header'>
            <h1 class='title'>3 Biggest Ways Blockchain Will Change Society</h1>
          </div>
          <div class='wysiwyg'>
            <slot />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import SectionName from '@/components/base/SectionName/SectionName.vue'
export default {
  name: 'NewsPae',
  components: {
    PageHeader,
    SectionName,
  }
}
</script>

<style>

</style>
