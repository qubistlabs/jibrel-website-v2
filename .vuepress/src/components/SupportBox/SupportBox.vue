<template>
  <div class='support-box'>
    <a :href='`mailto:${mail}`' class='link' target='_blank'>{{mail}}</a>
    <p class='descr -text-center -box-center -w-limit-650 -offset-bottom'>{{descr}}</p>
  </div>
</template>

<script>
export default {
  name: 'SupportBox',
  props: {
    mail: String,
    descr: String
  },
}
</script>

<style lang='scss'>
  @import './supportBox.scss';
</style>
