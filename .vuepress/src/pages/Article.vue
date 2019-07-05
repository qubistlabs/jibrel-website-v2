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
      <div class='container _container-fix -bg-white -mobile-bg-gray'>
        <div class='article-page'>
          <img
            :src="`/assets/img/blog/${$page.frontmatter.heroImage.name}.jpg`"
            class='preview' :alt="$page.frontmatter.heroImage.alt ? $page.frontmatter.heroImage.alt : $page.frontmatter.title"
          >
          <div class="container">
            <div class='header'>
              <div class="left">
                <time
                  class='date'
                  :datetime='$page.frontmatter.date'
                >
                  {{ $page.frontmatter.date | formatDate }}
                </time>
                <router-link :to='`/${tagRootPath}`' class='tag'>{{tagName}}</router-link>
              </div>
              <social-sharing 
                :url="pageUrl"
                :title="$page.frontmatter.title"
                :description="$page.frontmatter.description"
                :media="`${$page.frontmatter.heroImage}-full.jpg`"
                network-tag='button'
                twitter-user="jibrelnetwork"
                inline-template
              >
                <div class="share">
                  <network network="facebook" class="item -fb">{{$themeLocaleConfig.data.Share.Share}}</network>
                  <network network="linkedin" class="item -tw">{{$themeLocaleConfig.data.Share.Tweet}}</network>
                  <network network="twitter" class="item -in">{{$themeLocaleConfig.data.Share.Share}}</network>
                </div>
              </social-sharing>
            </div>
            <h1 class='title'>{{$page.frontmatter.title}}</h1>
            <div class='wysiwyg'>
              <slot />
            </div>
          </div>
          <div class='subscribe'>
            <div class='title' data-aos='fade-in' data-aos-duration='600' data-aos-delay='600'>{{$themeLocaleConfig.data.Article.SubscribeTitle}}</div>
            <div class='form' data-aos='fade-in' data-aos-duration='1200' data-aos-delay='600'>
              <Subscribe />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class='section-content -bg-gray -offset-top -offset-bottom'>
      <div class="_container-fix">
        <ArticlesPreviews :isMainBlogPage='false' limit='3' />
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
import SetScript from '@/Utils/SetScript.js'
import SectionName from '@/components/base/SectionName/SectionName.vue'
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
import ContactsList from '@/components/ContactsList/ContactsList.vue'
import { timeout } from 'q';

export default {
  name: 'NewsPage',
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
      heroImage: this.$page.frontmatter.heroImage ? `assets/img/blog/${this.$page.frontmatter.heroImage}-full.jpg` : null,
      isOnlyPageTitle: true
    })
  },
  methods: {
    getTagData(path) {
      if (path.indexOf('/blog/how-tos/') !== -1) {
        this.tagRootPath = 'blog/how-tos/'
        this.tagName = this.$themeLocaleConfig.data.Article.HowTos
      }
      if (path.indexOf('/blog/updates/') !== -1) {
        this.tagRootPath = 'blog/updates/'
        this.tagName = this.$themeLocaleConfig.data.Article.Updates
      }
      if (path.indexOf('/blog/tokenization/') !== -1) {
        this.tagRootPath = 'blog/tokenization/'
        this.tagName = this.$themeLocaleConfig.data.Article.Tokenization
      }
      if (path.indexOf('/blog/blockchain/') !== -1) {
        this.tagRootPath = 'blog/blockchain/'
        this.tagName = this.$themeLocaleConfig.data.Article.Blockchain
      }
    },
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

      link.forEach(element => {
        const href = element.getAttribute('href')
        element.setAttribute('href', decodeURIComponent(href).replace(/[&\/\\,+()$~%.'":*?<>{}]/g, ""))
        
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
    this.getTagData(this.$page.path)
    this.pageUrl = this.$localeConfig.site + this.$page.path    
  },
  mounted() { 
    this.handlingTOC()
  },
}
</script>

