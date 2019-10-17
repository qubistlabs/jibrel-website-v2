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
        <ArticlesPreviews
          :pages='posts'
        />
      </div>
    </section>
    <section class='section-content'>
      <ContactsList isWhite='true'/>
    </section>
  </Layout>
</template>

<script>
  import Layout from './Layout.vue'
  import SectionName from '@/components/base/SectionName/SectionName.vue'
  import ArticlesPreviews from '@/components/Blog/ArticlesPreviews/ArticlesPreviews.vue'
  import BlogHeader from '@/components/Blog/BlogHeader/BlogHeader.vue'
  import MorePost from '@/components/Blog/MorePost/MorePost.vue'
  import ContactsList from '@/components/ContactsList/ContactsList.vue'
  import { getBlogPosts } from '@/Utils/blogPosts'

  export default {
    name: 'BlogCategory',
    components: {
      Layout,
      SectionName,
      ArticlesPreviews,
      BlogHeader,
      MorePost,
      ContactsList,
    },
    computed: {
      posts() {
        return getBlogPosts(
          this.$localeConfig.shortLang,
          this.$site.pages,
        )
          .filter(page => page.frontmatter.category === this.$page.frontmatter.category)
      },
    },
  }
</script>
