<template>
  <vue-glide v-bind='options' data-aos='fade-in' data-aos-duration='900' data-aos-delay='150'>
    <vue-glide-slide v-for='partner in partners' :key='partner.link'>
      <a :href='partner.link' target='_blank' class='partner-item'><img :src='partner.img' :srcset='`${partner.img2x} 2x`' alt='logo' class='logo'></a>
    </vue-glide-slide>
  </vue-glide>
</template>


<script>
import Vue from 'vue' 
import PartnersData from './PartnersData.js'
import { Glide, GlideSlide } from 'vue-glide-js'
export default {
  name: 'PartnersCard',
   components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data() { 
    return {
      options: {
        autoplay: 4000,
        type: 'carousel',
        perView: 4,
        animationDuration: 800,
        breakpoints: {
          767: {
            perView: 1,
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

<style>
  @import '~vue-glide-js/dist/vue-glide.css';
</style>
