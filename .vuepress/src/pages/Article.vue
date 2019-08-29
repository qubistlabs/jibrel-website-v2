<template>
  <div>
    <section class='section-content -bg-gray -offset-blog'>
      <ArticlesHeader />
      <SectionName
        :title='$themeLocaleConfig.data.SectionName.blog'
        positionContainer='bottom-460'
        positionTitle='top'
        colorTheme='colored'
        arrow='up'
      />
      <div class='container _container-fix'>
        <div class='article-page'>
          <div class="preview" :style="`background-color: ${$page.frontmatter.heroImage.bgColor}`">
            <img
              :src="`/assets/img/blog/${$page.frontmatter.heroImage.name}`"
              class='img' :alt="$page.frontmatter.heroImage.alt ? $page.frontmatter.heroImage.alt : $page.frontmatter.title"
            >
          </div>
          <div class="container">
            <div class='header'>
              <div class="left">
                <router-link :to='category.href' class='tag'>{{category.content}}</router-link>
              </div>
              <social-sharing
                :url="pageUrl"
                :title="$page.frontmatter.title"
                :description="$page.frontmatter.description"
                :media="`${$page.frontmatter.heroImage}`"
                network-tag='button'
                twitter-user="jibrelnetwork"
                inline-template
              >
                <div class="share">
                  <network network="facebook" class="item -fb">{{$themeLocaleConfig.data.Share.Share}}</network>
                  <network network="twitter" class="item -tw">{{$themeLocaleConfig.data.Share.Tweet}}</network>
                  <network network="linkedin" class="item -in">{{$themeLocaleConfig.data.Share.Share}}</network>
                </div>
              </social-sharing>
            </div>
            <h1 class='title'>{{$page.frontmatter.title}}</h1>
            <div class='wysiwyg' :class="this.$page.frontmatter.themePage && `-${this.$page.frontmatter.themePage}`">
              <slot />
            </div>
          </div>
        </div>
        <Subscribe variant='-on-article' />
      </div>
    </section>
    <div class='section-content -bg-gray -offset-top -offset-bottom -mobile-small-offsset'>
      <div class="_container-fix">
        <ArticlesPreviews :isMainBlogPage='false' limit='3' :removeIt='this.$page.key' />
      </div>
    </div>
    <section class='section-content'>
      <ContactsList isWhite='true'/>
    </section>
  </div>
</template>

<script>
import ArticlesPreviews from '@/components/Articles/ArticlesPreviews/ArticlesPreviews.vue'
import Subscribe from '@/components/Forms/Subscribe/Subscribe.vue'
import ArticlesHeader from '@/components/Articles/ArticlesHeader/ArticlesHeader.vue'
import MetaInfo from '@/Utils/MetaInfo.js'
import { getCategoryLink } from '@/Utils/getCategoryLink.js'
import SectionName from '@/components/base/SectionName/SectionName.vue'
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
import ContactsList from '@/components/ContactsList/ContactsList.vue'

export default {
  name: 'Article',
  components: {
    SpriteIcon,
    ArticlesHeader,
    SectionName,
    ContactsList,
    Subscribe,
    ArticlesPreviews,
  },
  data() {
    return {
      isOpened: false,
      tagRootPath: '',
      tagName: '',
      pageUrl: '',
    }
  },
  metaInfo () {
    return MetaInfo({
      path: this.$route.path,
      title: this.$page.frontmatter.title,
      description: this.$page.frontmatter.description,
      heroImage: this.$page.frontmatter.heroImage ? `assets/img/blog/${this.$page.frontmatter.heroImage}` : null,
      isOnlyPageTitle: true
    })
  },
  methods: {
    handlingTOC() {
      const TOCContainer = document.querySelector('.table-of-contents')
      const toggle = TOCContainer.querySelector('.header')
      const link = TOCContainer.querySelectorAll('a')
      toggle.addEventListener('click', function () {
        if (this.isOpened) {
          TOCContainer.classList.remove('-open')
          this.isOpened = false
          } else {
          TOCContainer.classList.add('-open')
          this.isOpened = true
        }
      });

      function anchorFormatter(anchor) {
        const anchorCLeaned = decodeURIComponent(anchor).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "").replace(/-+/g, '-')
        if (Number(anchorCLeaned.slice(0, 1))) {
          return '#_' + anchorCLeaned
        }
        return '#' + anchorCLeaned
      }

      link.forEach(element => {
        const href = element.getAttribute('href')
        element.setAttribute('href', anchorFormatter(href))
        element.addEventListener('click', function (e) {
          e.preventDefault()
          const id = this.getAttribute('href')
          const offset = document.querySelector(id).offsetTop

          window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': offset + 120
          });
          return false
        });
      });
    }
  },
  created() {    
    this.category = getCategoryLink(this.$themeLocaleConfig.data, this.$page.path)
    this.pageUrl = this.$localeConfig.site + this.$page.path
  },
  mounted() {
    this.handlingTOC()
  },
}
</script>

