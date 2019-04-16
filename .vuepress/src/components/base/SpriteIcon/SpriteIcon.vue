<template>
  <svg :class="className" :width='iconWidth' :height='iconHeight' xmlns="http://www.w3.org/2000/svg">
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink"/>
  </svg>
</template>

<script>
export default {
  name: 'SpriteIcon',
  props: {
    name: String,
    className: '',
  },
  data() {
    const icon = require(`@/assets/img/svg/${this.name}.svg`).default;
    const [,, width, height] = icon.viewBox.split(/(\s+)/).filter(e => e.trim().length > 0)

    return {
      iconPath: `/${icon.url}`,
      iconWidth: width,
      iconHeight: height,
    }
  },
}
</script>

