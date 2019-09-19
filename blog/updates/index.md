---
index: true 
title: Blog
category: how-tos
---

<template>
  <ArticlesList curretCategory='updates' />
</template>


<script>
  import ArticlesList from '@/pages/ArticlesList.vue'
  export default {
  components: {
      ArticlesList,
    },
  };
</script>
