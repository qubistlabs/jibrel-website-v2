---
type: precast-page
index: true 
---

<template>
  <section class='section-content -offset-page -offset-bottom -bottom-separator -bg-gray'>
    <div class='container _container-fix'>
      <NewsPreviews />
    </div>
  </section>
</template>


<script>
  import NewsPreviews from '@/components/NewsPreviews/NewsPreviews.vue'
  export default {
  components: {
      NewsPreviews,
    },
  };
</script>