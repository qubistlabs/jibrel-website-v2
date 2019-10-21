<template>
  <Layout>
    <section class='section-content -offset-blog -offset-bottom -bottom-separator -bg-gray'>
      <BlogHeader />
      <SectionName
        :title='$themeLocaleConfig.data.SectionName.blog'
        positionContainer='bottom-460'
        positionTitle='bottom'
        colorTheme='colored'
        arrow='up'
      />
      <div class='container _container-fix'>
        <ArticlesPreviews :isMainBlogPage='true' />
      </div>
    </section>
    <section class='section-content'>
      <ContactsList isWhite='true'/>
    </section>
  </Layout>
</template>


<script>
  import Layout from './layouts/Layout.vue'
  import SectionName from '@/components/base/SectionName/SectionName.vue'
  import ArticlesPreviews from '@/components/Blog/ArticlesPreviews/ArticlesPreviews.vue'
  import BlogHeader from '@/components/Blog/BlogHeader/BlogHeader.vue'
  import MorePost from '@/components/Blog/MorePost/MorePost.vue'
  import ContactsList from '@/components/ContactsList/ContactsList.vue'

  export default {
    components: {
      Layout,
      SectionName,
      ArticlesPreviews,
      BlogHeader,
      MorePost,
      ContactsList,
    },
  }
</script>
