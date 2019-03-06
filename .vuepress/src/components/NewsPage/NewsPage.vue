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
          <div class='date'>{{this.$page.frontmatter.date}}</div>
          <div class='header'>
            <h1 class='title'>{{this.$page.frontmatter.title}}</h1>
          </div>
          <div class='wysiwyg'>
            <slot />
          </div>
            <a :href='this.$page.frontmatter.link' class='source' target='_blank' rel='nofollow'>Go to article 
              <svg class="icon" width="16" height="16"><use xlink:href="#i-external-link"></use></svg>
            </a>
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
