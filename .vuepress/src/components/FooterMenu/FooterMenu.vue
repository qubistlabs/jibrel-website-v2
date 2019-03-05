<template>
  <div class='footer-menu'>
    <div class='box' data-aos='fade-down' data-aos-duration='300' data-aos-delay="150">
      <div class='title'>Company</div>
      <div class='item '>
        <a href='about.html' class='link ' >
          About Jibrel
        </a>
      </div>
      <div class='item '>
        <a href='news.html' class='link ' >
          News &amp; Media
        </a>
      </div>
      <div class='item '>
        <a href='careers.html' class='link ' >
          Careers
        </a>
      </div>
    </div>
    <div class='box'  data-aos='fade-down' data-aos-duration='600' data-aos-delay="150">
      
      <div class='title'>Products</div>
      <div class='item '>
        <a href='enterprise.html' class='link ' >
          Enterprise
        </a>
      </div>
      <div class='item -small-offset-left'>
        <a href='https://jwallet.network' class='link -small-offset-left' target='_blank' >
          Jwallet
        </a>
      </div>
      <div class='item -small-offset-left'>
        <a href='https://jcash.network' class='link -small-offset-left' target='_blank' >
          Jcash
        </a>
      </div>
    </div>
    <div class='box'  data-aos='fade-down' data-aos-duration='900' data-aos-delay="150">
      <div class='title'>Contact</div>
      <div class='item'>
        <button class='link js-popup-open' data-popup-id='#send-message'>Get In Touch</button>
      </div>
    </div>
    <div class='box' data-aos='fade-down' data-aos-duration='1200' data-aos-delay="150">
      <div class='title'>Social</div>
      <CircleSocial />
    </div>
  </div>
</template>

<script>
import CircleSocial from '@/components/CircleSocial/CircleSocial.vue'
export default {
  name: 'FooterMenu',
    components: {
    CircleSocial,
  },
}
</script>

<style lang="scss">
  @import './footerMenu';
</style>

