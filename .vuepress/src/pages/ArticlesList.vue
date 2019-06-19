<template>
  <div>
    <section class='section-content -offset-blog -offset-bottom -bottom-separator -bg-gray'>
      <ArticlesHeader />
      <SectionName
        :title='$themeLocaleConfig.data.SectionName.blog'
        positionContainer='bottom-460'
        positionTitle='bottom'
        colorTheme='colored'
        arrow='up'
      />
      <div class='container _container-fix'>
        <ArticlesPreviews :limit='currentLimit()' :isMainBlogPage='mainBlogPage' />
        <MorePost v-if='isShowMoreInfo'/>
      </div>
    </section>
    <section class='section-content'>
      <ContactsList isWhite='true'/>
    </section>
  </div>
</template>


<script>
  import EventBus from '@/Utils/EventBus.js';
  import MetaInfo from '@/Utils/MetaInfo.js'
  import SectionName from '@/components/base/SectionName/SectionName.vue'
  import ArticlesPreviews from '@/components/Articles/ArticlesPreviews/ArticlesPreviews.vue'
  import ArticlesHeader from '@/components/Articles/ArticlesHeader/ArticlesHeader.vue'
  import MorePost from '@/components/Articles/MorePost/MorePost.vue'
  import ContactsList from '@/components/ContactsList/ContactsList.vue'
  export default {
    components: {
      SectionName,
      ArticlesPreviews,
      ArticlesHeader,
      MorePost,
      ContactsList,
    },
    props: {
      mainBlogPage: Boolean
    },
    data() {
      return {
        limit: 6,
        isShowMoreInfo: false,
      }
    },
    methods: {
      currentLimit() {        
        return this.mainBlogPage ? 0 : this.limit
      }
    },
    created() {
      EventBus.$on('load-limit', data => {      
        this.limit = data
      })
      EventBus.$on('posts-length', data => {      
        this.isShowMoreInfo = data > this.limit ? true : false
      })
    },
    beforeDestroy() {
      // EventBus.$off('load-limit')
      // EventBus.$off('posts-length')
    },
    metaInfo () {
      return MetaInfo(
        this.$route.path,
        this.$page.frontmatter.title,
      )
    },
  };
</script>