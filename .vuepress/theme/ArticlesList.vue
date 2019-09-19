<template>
  <Layout>
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
        <ArticlesPreviews :isMainBlogPage='true' />
        <VuePaginame
          :value="page"
          :page-count="$pagination.length"
          :click-handler="clickCallback"
          :prev-text="arrowLeft + 'Previous'"
          :next-text="'Next' + arrowRight"
          container-class='content-pagination'
          prev-link-class='prev'
          next-link-class='next'
          page-link-class='item'
          active-class='-active'
          disabled-class='-disabled'
          :no-li-surround='true'
        />
      </div>
    </section>
    <section class='section-content'>
      <ContactsList isWhite='true'/>
    </section>
  </Layout>
</template>


<script>
  import Layout from './Layout.vue';
  import VuePaginame  from "vuejs-paginate";
  import EventBus from '@/Utils/EventBus.js';
  import SectionName from '@/components/base/SectionName/SectionName.vue'
  import ArticlesPreviews from '@/components/Articles/ArticlesPreviews/ArticlesPreviews.vue'
  import ArticlesHeader from '@/components/Articles/ArticlesHeader/ArticlesHeader.vue'
  import MorePost from '@/components/Articles/MorePost/MorePost.vue'
  import ContactsList from '@/components/ContactsList/ContactsList.vue'

  const arrowLeft = '<svg class="icon" viewBox="0 0 25 24"><path d="M24 13H1c-.6 0-1-.4-1-1s.4-1 1-1h23c.6 0 1 .4 1 1s-.4 1-1 1z" class="st0"/><path d="M13.5 24c-.2 0-.5-.1-.7-.2L.3 12.8c-.2-.2-.3-.5-.3-.8s.1-.6.3-.8L12.8.2c.4-.4 1-.3 1.4.1.4.4.3 1-.1 1.4L2.5 12l11.6 10.2c.4.4.5 1 .1 1.4-.1.3-.4.4-.7.4z" class="st0"/></svg>'
  const arrowRight = '<svg class="icon" viewBox="0 0 25 24"><path d="M25 12c0-.1 0-.3-.1-.4-.1-.1-.1-.2-.2-.3L12.2.3c-.4-.4-1-.3-1.4.1-.4.4-.3 1 .1 1.4L21.3 11H1c-.6 0-1 .4-1 1s.4 1 1 1h20.4l-10.5 9.3c-.4.4-.5 1-.1 1.4.2.2.5.3.8.3.2 0 .5-.1.7-.2l12.5-11c.1-.1.1-.1.1-.2l.1-.1V12z" class="st0"/></svg>'

  export default {
    components: {
      Layout,
      SectionName,
      ArticlesPreviews,
      ArticlesHeader,
      MorePost,
      ContactsList,
      VuePaginame
    },
    computed: {
      arrowLeft() {
        return arrowLeft
      },
      arrowRight() {
        return arrowRight
      },
      page() {
        return this.$pagination.paginationIndex + 1
      }
    },
    methods: {
      clickCallback(pageNum) {
        const link = this.$pagination.getSpecificPageLink(pageNum - 1)
        this.$router.push(link)
      },
    },
  };
</script>