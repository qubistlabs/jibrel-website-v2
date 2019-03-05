<template>
  <div class='select-language -in-header' :class='isOpened && "-open"'>
    <button class='toggle' @click='isOpened = true'>
      <span class='current' :class='`-${color}`'>ENGLISH</span>
      <svg class='icon' :class='`-${color}`' width='7.5px' height='4.5px'><use xlink:href='#i-che-b'></use></svg>
    </button>
    <div class='overlay' @click='isOpened = false'></div>
    <div class='drop'>
      <button class='item -current' data-language='en'>ENGLISH</button>
      <button class='item' data-language='ko'>한국어</button>
    </div>
  </div>
</template>


<script>
  // console.log($style);
export default {
  name: 'SelectLanguage',
  props: {
    color: 'color' | 'white'
  },
  data() {
    return {
      isOpened: false,
    }
  },
}

</script>

<style lang="scss">
  @import './selectLanguage';
</style>

