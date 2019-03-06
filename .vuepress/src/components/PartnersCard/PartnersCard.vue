<template>
  <swiper class='partners-card -offset-top swiper-container' :options="swiperOption" ref="mySwiper" data-aos='fade-in' data-aos-duration='900' data-aos-delay='150'>
    <swiper-slide v-for='partner in partners' :key='partner.link'>
      <a :href='partner.link' target='_blank' class='partner-item'><img :src='partner.img' :srcset='`${partner.img2x} 2x`' alt='logo' class='logo'></a>
    </swiper-slide>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import PartnersData from './PartnersData.js'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'PartnersCard',
  components: {
    swiper,
    swiperSlide
  },
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
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
}
</script>

<style lang="scss">
  @import './partnersCard';
</style>

<!--       
      <a href='http://seedgroup.com/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-2.png' srcset='@/assets/img/general/partners/client-2@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://www.vqf.ch/en/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-3.png' srcset='@/assets/img/general/partners/client-3@2x.png 2x' alt='logo' class='logo'></a>
      <a href='http://www.jabbar.com/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-5.png' srcset='@/assets/img/general/partners/client-5@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://www.kambio.io/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-6.png' srcset='@/assets/img/general/partners/client-6@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://www.britishblockchainassociation.com/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-7.png' srcset='@/assets/img/general/partners/client-7@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://loopring.org/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-8.png' srcset='@/assets/img/general/partners/client-8@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://taas.fund/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-9.png' srcset='@/assets/img/general/partners/client-9@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://hacken.io/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-10.png' srcset='@/assets/img/general/partners/client-10@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://bitcoinsuisse.ch/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-11.png' srcset='@/assets/img/general/partners/client-11@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://www.arabianchain.org/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-12.png' srcset='@/assets/img/general/partners/client-12@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://cryptovalley.swiss/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-13.png' srcset='@/assets/img/general/partners/client-13@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://complyadvantage.com/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-14.png' srcset='@/assets/img/general/partners/client-14@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://www.lexpertpartners.ch/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-15.png' srcset='@/assets/img/general/partners/client-15@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://mama.global/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/client-16.png' srcset='@/assets/img/general/partners/client-16@2x.png 2x' alt='logo' class='logo'></a>
      <a href='https://www.alhilalbank.ae/' target='_blank' class='item swiper-slide'><img src='@/assets/img/general/partners/al-hilal-bank.png' srcset='@/assets/img/general/partners/al-hilal-bank@2x.png 2x' alt='logo' class='logo'></a> -->
