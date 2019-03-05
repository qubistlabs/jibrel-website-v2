<template>
  <nav class='main-menu'>
    <div class='close'>
      <button class='modal-toggle' @click="$emit('close')">
        <svg class="cross -white" width="22.414px" height="22.414px"><use xlink:href="#i-cross"></use></svg>
      </button>
    </div>
    <div class='container'>
      <div class='box'>
        <div class='name'>Products</div>
        <div class='item'>
          <a href='enterprise.html' class='link'>Enterprise</a>
        </div>
        <div class='item'>
          <a href='https://jwallet.network' class='link' target='_blank' >Jwallet</a>
        </div>
        <div class='item'>
          <a href='https://jcash.network' class='link' target='_blank' >Jcash</a>
        </div>
      </div>
      <div class='box'>
        <div class='name'>Company</div>
        <div class='item'>
          <a href='about.html' class='link'>About Us</a>
        </div>
        <div class='item'>
          <a href='news.html' class='link'>News &amp; Media</a>
        </div>
        <div class='item'>
          <a href='careers.html' class='link' >Careers</a>
        </div>
      </div>
      <div class='box'>
        <div class='name'>Contact</div>
        <div class='item'>
          <button class='link js-popup-open' data-popup-id='#send-message'>Contact Us</button>
        </div>
        <div class='item'>
          <a href='https://www.facebook.com/jibrelnetwork/' class='link' target='_blank' >Facebook</a>
        </div>
        <div class='item'>
          <a href='https://twitter.com/JibrelNetwork' class='link' target='_blank' >Twitter</a>
        </div>
        <div class='item'>
          <a href='https://www.linkedin.com/company/jibrel-network/' class='link' target='_blank' >Linkedin</a>
        </div>
        <div class='item'>
          <a href='https://medium.com/@jibrelnetwork' class='link' target='_blank' >Medium</a>
        </div>
      </div>
    </div>
    <div class='button'>
      <a href='https://jcash.network/auth/signin' class='j-button -border-on-dark-bg' target='_blank'><span class='text'>Sign In</span></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style lang="scss">
  @import './mainMenu.scss'
</style>
