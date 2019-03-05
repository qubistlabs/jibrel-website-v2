<template>
  <div class='circle-social'>
    <a href='https://www.facebook.com/jibrelnetwork/' target='_blank' class='link'>
      <svg class="icon" width="24" height="24"><use xlink:href="#s-c-facebook"></use></svg>
    </a>
    <a href='https://twitter.com/JibrelNetwork' target='_blank' class='link'>
      <svg class="icon" width="24" height="24"><use xlink:href="#s-c-twitter"></use></svg>
    </a>
    <a href='https://www.linkedin.com/company/jibrel-network/' class='link' target='_blank'>
      <svg class="icon" width="24" height="24"><use xlink:href="#s-c-linkedin"></use></svg>
    </a>
    <a href='https://medium.com/@jibrelnetwork' class='link' target='_blank'>
      <svg class="icon" width="24" height="24"><use xlink:href="#s-c-medium"></use></svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CircleSocial'
}
</script>

<style lang='scss'>
  @import './circleSocial.scss';
</style>
