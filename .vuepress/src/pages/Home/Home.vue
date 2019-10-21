<template>
  <div>
    <JibrelComPromo />
    <section class='section-content -offset-bottom -offset-top'>
      <div class='container _container-fix'>
        <h2 class='home-section-title'>
          {{$localeConfig.data['Home.About.title']}}
        </h2>
        <div class='card-tile -distribute-evenly -coverlet-30'>
          <div class='item -three-col -w-limit-350' data-aos="fade-down" data-aos-duration="300" data-aos-delay="150">
            <div class='box -color -padding-small'>
              <div class='img'>
                <img src='@/assets/img/general/icon/scale.svg' class='icon' width='60' height='60' alt='icon'>
              </div>
              <h3 class='title '>{{$localeConfig.data.FeaturesProject.card_1.title}}</h3>
              <p class='descr '>{{$localeConfig.data.FeaturesProject.card_1.description}}</p>
            </div>
          </div>
          <div class='item -three-col -w-limit-350' data-aos="fade-down" data-aos-duration="600" data-aos-delay="150">
            <div class='box -color -padding-small'>
              <div class='img'>
                <img src='@/assets/img/general/icon/passport.svg' class='icon' width='60' height='60' alt='icon'>
              </div>
              <h3 class='title '>{{$localeConfig.data.FeaturesProject.card_2.title}}</h3>
              <p class='descr '>{{$localeConfig.data.FeaturesProject.card_2.description}}</p>
            </div>
          </div>
          <div class='item -three-col -w-limit-350' data-aos="fade-down" data-aos-duration="900" data-aos-delay="150">
            <div class='box -color -padding-small'>
              <div class='img'>
                <img src='@/assets/img/general/icon/cloud-data.svg' class='icon' width='60' height='60' alt='icon'>
              </div>
              <h3 class='title '>{{$localeConfig.data.FeaturesProject.card_3.title}}</h3>
              <p class='descr '>{{$localeConfig.data.FeaturesProject.card_3.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -center-child-box -offset-bottom -mobile-bg-gray'>
      <div class='container -center-box _container-fix -bg-gray'>
        <div class='preview-info -row -inner -mobile-offset-bottom-collapse'>
          <div class='text -w40'>
            <h2 class='title -color -neighbor-img' data-aos='fade-right' data-aos-duration='300' data-aos-delay='150'>{{$localeConfig.data.ProductInfo.jwallet.title}}</h2>
            <div class='descr -color -small-text' data-aos='fade-right' data-aos-duration='600' data-aos-delay='150'>{{$localeConfig.data.ProductInfo.jwallet.description}}</div>
            <div class='btns' data-aos='fade-right' data-aos-duration='900' data-aos-delay='150'>
              <a :href='$localeConfig.data.LinkLanguageVersion.jwallet' target='_blank' class='j-button -fill-white-on-gray-bg -w-limit-240'>
                <span class='text'>{{$localeConfig.data.ProductInfo.jwallet.button}}</span>
              </a>
            </div>
          </div>
          <div class='picture'>
            <img src='@/assets/img/general/chess/jwallet-m.png' srcset='@/assets/img/general/chess/jwallet-m@2x.png 2x' class='img _mobile-visible' data-aos='fade-left' data-aos-duration='600' data-aos-delay='150' alt='Jibrel Wallet'>
          </div>
          <div class='picture'>
            <img src='@/assets/img/general/chess/jwallet.png' srcset='@/assets/img/general/chess/jwallet@2x.png 2x'  class='img -jwallet-note _mobile-hide' data-aos='fade-up' data-aos-duration='600' data-aos-delay='150' alt='/'>
            <img src='@/assets/img/general/chess/jwallet-2.png' srcset='@/assets/img/general/chess/jwallet-2@2x.png 2x'  class='img -jwallet-phone _mobile-hide' data-aos='fade-down' data-aos-duration='900' data-aos-delay='150' alt='/'>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -center-child-box -mobile-bg-gray'>
      <div class='container -center-box _container-fix -bg-gray'>
        <div class='preview-info -row -inner -reverse -mobile-offset-top-collapse'>
          <div class='text -w40'>
            <h2 class='title -color -neighbor-img' data-aos='fade-left' data-aos-duration='300' data-aos-delay='150'>{{$localeConfig.data.ProductInfo.jcash.title}}</h2>
            <div class='descr -color -small-text' data-aos='fade-left' data-aos-duration='600' data-aos-delay='150'>{{$localeConfig.data.ProductInfo.jcash.description}}</div>
            <div class='btns' data-aos='fade-left' data-aos-duration='900' data-aos-delay='150'>
              <a :href='$localeConfig.data.LinkLanguageVersion.jcash' target='_blank' class='j-button -fill-white-on-gray-bg -w-limit-240'>
                <span class='text'>{{$localeConfig.data.ProductInfo.jcash.button}}</span>
              </a>
            </div>
          </div>
          <div class='picture'>
            <img src='@/assets/img/general/chess/jcash-m.png' srcset='@/assets/img/general/chess/jcash-m@2x.png 2x' class='img _mobile-visible' data-aos='fade-right' data-aos-duration='600' data-aos-delay='150' alt='Jibrel Cash'>
          </div>
          <div class='picture'>
            <img src='@/assets/img/general/chess/jcash.png' srcset='@/assets/img/general/chess/jcash@2x.png 2x'  class='img -jcash-desk _mobile-hide' data-aos='fade-down' data-aos-duration='600' data-aos-delay='150' alt='/'>
            <img src='@/assets/img/general/chess/jcash-2.png' srcset='@/assets/img/general/chess/jcash-2@2x.png 2x'  class='img -jcash-keyboard _mobile-hide' data-aos='fade-up' data-aos-duration='900' data-aos-delay='150' alt='/'>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -offset-top -offset-bottom'>
      <div class='container _container-fix' data-aos='fade-in' data-aos-duration='600' data-aos-delay='150'>
        <h2 class='title -text-center -box-center' data-aos='fade-in' data-aos-duration='600' data-aos-delay='150'>{{$localeConfig.data.PartnersData.title}}</h2>
        <PartnersCard />
      </div>
    </section>
    <section class='section-content -offset-bottom -mobile-bg-gray -mobile-offset-top'>
      <div class='container _container-fix'>
        <NewsPreviews isBordered='true' limit='3' />
        <div class='j-buttons -center' data-aos='fade-in' data-aos-duration='1200' data-aos-delay='150'>
          <router-link :to='`${this.$localeConfig.path}news/`' class='j-button -fill-on-white-bg -w-limit-360' >
            <span class='text'>{{$themeLocaleConfig.data.ProjectNews.showMore}}</span>
          </router-link>
        </div>
      </div>
    </section>
    <ContactsList isWhite='true' />
  </div>
</template>

<script>
  import NewsPreviews from '@/components/NewsPreviews/NewsPreviews.vue'
  import PartnersCard from '@/components/PartnersCard/PartnersCard.vue'
  import ContactsList from '@/components/ContactsList/ContactsList.vue'
  import Greeting from './Greeting.vue'
  import JibrelComPromo from './JibrelComPromo.vue'

  export default {
    components: {
      Greeting,
      JibrelComPromo,
      NewsPreviews,
      PartnersCard,
      ContactsList,
    },
  }
</script>

<style>
  @import './home.scss';
</style>
