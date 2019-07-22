
<template>
  <div class='list-vacancies'>
    <h1 class='title'>{{this.$localeConfig.data.CareerPage.title}}</h1>
    <router-link :to='post.path' class='item' v-for='post in posts' :key='post.path'>
      <div class='header'>
        <div class='position'>{{ post.frontmatter.title }}</div>
        <JobInfo 
          :time='post.frontmatter.time'
          :place='post.frontmatter.place'
          :onVacanciesList='true'
        />
      </div>
      <div class='body'>
        <div class='descr'>{{ post.frontmatter.description }}</div>
      </div>
    </router-link>
  </div>  
</template>

<script>
import JobInfo from '@/components/JobInfo/JobInfo.vue'
const cityOrder = {
  'Saint-Petersburg, Russia': 0,
  'New York, USA': 1,
  'Dubai, UAE': 2,
}
export default {
  name: 'ListVacancies',
  components: {
    JobInfo,
  },
  props: {
    limit: 0,
  },
  computed: {
    posts() {        
      
      const posts = this.$site.pages
        .filter(x => x.path.startsWith(this.$localeConfig.path + 'careers/') && !x.frontmatter.index && x.frontmatter.published)     
        .sort((a, b) => cityOrder[a.frontmatter.place] - cityOrder[b.frontmatter.place]) 
      if (!this.limit) {
        return posts
      }
      return posts.slice(0, Number(this.limit))
    },
  },
}
</script>


<style lang="scss">
  @import './listVacancies.scss';
</style>

