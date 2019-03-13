<template>
  <!-- <div v-swiper:mySwiper="swiperOption" data-aos='fade-in' data-aos-duration='900' data-aos-delay='150'>
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="partner in partners" :key='partner.link'>
        <a :href='partner.link' target='_blank' class='partner-item'><img :src='partner.img' :srcset='`${partner.img2x} 2x`' alt='logo' class='logo'></a>
      </div>
    </div>
  </div> -->

</template>


<script>
import Vue from 'vue' 
import PartnersData from './PartnersData.js'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
export default {
  name: 'PartnersCard',
  data() { 
    return {
      swiperOption: {
        loop: true,
        spaceBetween: 0,
        autoplay: true,
        speed: 800,
        slidesPerView: 4,
        breakpoints: {
          767: {
            slidesPerView: 1,
          },
        },
      },
      partners: PartnersData,
    }
  },
}
</script>

<style lang="scss">
  @import './partnersCard';
</style>