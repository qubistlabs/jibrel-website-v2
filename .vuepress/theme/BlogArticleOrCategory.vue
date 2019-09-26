<template>
    <component v-bind:is="guessedTemplate"></component>
</template>

<script>
import get from 'lodash-es/get'
import Article from './Article'
import Layout from './layouts/Layout'

export default {
  name: 'BlogArticleOrCategory',
  components: {
    Article,
    Layout,
  },
  computed: {
    guessedTemplate: function () {
      if (get(this.$page, 'frontmatter.category') && get(this.$page, 'frontmatter.index')) {
        return 'Layout'
      }

      return 'Article'
    }
  },
}
</script>
