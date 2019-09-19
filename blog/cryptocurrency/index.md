---
index: true 
title: Blog
category: cryptocurrency
---

<template>
  <ArticlesList curretCategory='cryptocurrency' />
</template>


<script>
  import ArticlesList from '@/pages/ArticlesList.vue';

  export default {
    components: {
      ArticlesList,
    },
  };
</script>
