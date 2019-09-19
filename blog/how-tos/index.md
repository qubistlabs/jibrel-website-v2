---
index: true 
title: Blog
category: how-tos
---

<template>
  <ArticlesList curretCategory='how-tos' />
</template>


<script>
  import ArticlesList from '@/pages/ArticlesList.vue'
  export default {
  components: {
      ArticlesList,
    },
  };
</script>
