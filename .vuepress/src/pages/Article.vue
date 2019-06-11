<template>
  <div>
    <section class='section-content -bg-gray -offset-blog'>
      <ArticlesHeader />
      <SectionName
        :title='this.$themeLocaleConfig.data.SectionName.news'
        positionContainer='bottom-460'
        positionTitle='top'
        colorTheme='colored'
        arrow='up'
      />
      <div class='container _container-fix -bg-white -mobile-bg-gray'>
        <div class='article-page'>
          <img :src="`/assets/img/blog/${this.$page.frontmatter.source.img}-full.jpg`" class='preview' :alt="this.$page.frontmatter.title">
          <div class="container">
            <div class='header'>
              <div class="left">
                <time
                  class='date'
                  :datetime='this.$page.frontmatter.date'
                >
                  {{ this.$page.frontmatter.date | formatDate }}
                </time>
                <router-link :to='`/${tagRootPath}`' class='tag'>{{tagName}}</router-link>
              </div>
              <div class="share">
                <div class="item -fb">
                  <div class="fb-share-button" data-layout="button"></div>
                </div>
                <div class="item -tw">
                  <a class="twitter-share-button" :href='getUrl()'></a>
                </div>
                <div class="item -in"></div>
              </div>
            </div>
            <h1 class='title'>{{this.$page.frontmatter.title}}</h1>
            <div class='wysiwyg'>
              <slot />
            </div>
          </div>
          <div class='subscribe'>
            <div class='title' data-aos='fade-in' data-aos-duration='600' data-aos-delay='600'>Sign up to get Jibrel Updates</div>
            <div class='form _mobile-hide' data-aos='fade-in' data-aos-duration='1200' data-aos-delay='600'>
              <ProjectForm :isJcashOpen='true' eventType='sign-up-success'/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class='section-content -bg-gray -offset-top -offset-bottom'>
      <div class="_container-fix">
        <ArticlesPreviews :rootPath='tagRootPath' limit='3' />
      </div>
    </div>
    <section class='section-content'>
      <ContactsList isWhite='true'/>
    </section>
  </div>
</template>

<script>
import ArticlesPreviews from '@/components/Articles/ArticlesPreviews/ArticlesPreviews.vue'
import ProjectForm from '@/components/ProjectForm/ProjectForm.vue'
import ArticlesHeader from '@/components/Articles/ArticlesHeader/ArticlesHeader.vue'
import MetaInfo from '@/Utils/MetaInfo.js'
import SectionName from '@/components/base/SectionName/SectionName.vue'
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
import ContactsList from '@/components/ContactsList/ContactsList.vue'
import { timeout } from 'q';
export default {
  name: 'NewsPage',
  components: {
    ArticlesHeader,
    SectionName,
    SpriteIcon,
    ContactsList,
    ProjectForm,
    ArticlesPreviews,
  },
  data() {
    return {
      isOpened: false,
      tagRootPath: '',
      tagName: '',
    }
  },
  metaInfo () {
    return MetaInfo(
      this.$route.path,
      this.$page.frontmatter.title,
      this.$page.frontmatter.description
    )
  },
  methods: {
    getUrl() {
      return `https://twitter.com/intent/tweet?url=${window.location}`
    },
    getTagData(path) {
      if (path.indexOf('/blog/how-to-is/') !== -1) {
        this.tagRootPath = 'blog/how-to-is/'
        this.tagName = 'Blockchain Basics'
      }
      if (path.indexOf('/blog/updates/') !== -1) {
        this.tagRootPath = 'blog/updates/'
        this.tagName = 'Updates'
      }
      if (path.indexOf('/blog/tokenization/') !== -1) {
        this.tagRootPath = 'blog/tokenization/'
        this.tagName = 'Tokenziation'
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
      }, false);      

      link.forEach(element => {
        element.addEventListener('click', function (e) {
          e.preventDefault()
          const id = this.getAttribute('href')
          const offset = document.querySelector(id).offsetTop

          window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': offset - 30
          });
          
          return false
        }, false);
      });
    }
  },
  created() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    this.getTagData(this.$page.path)
  },
  mounted() {
    this.handlingTOC()
    const twitterWidgetsAPI = document.createElement('script')
    twitterWidgetsAPI.setAttribute('src', '//platform.twitter.com/widgets.js')
    document.head.appendChild(twitterWidgetsAPI)
    const linkedinWidgetsAPI = document.createElement('script')
    twitterWidgetsAPI.setAttribute('src', 'https://platform.linkedin.com/in.js')
    twitterWidgetsAPI.innerText = 'lang: en_US'    
    document.head.appendChild(twitterWidgetsAPI)
    const linkedinWidgetsButton = document.createElement('script')
    linkedinWidgetsButton.setAttribute('type', 'IN/Share')
    linkedinWidgetsButton.setAttribute('data-url', this.getUrl())
    document.querySelector('.item.-in').appendChild(linkedinWidgetsButton)
  }
}
</script>

<style>

</style>
