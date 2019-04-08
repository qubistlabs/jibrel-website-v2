<template>
  <section class='section-content -offset-page -offset-bottom -bottom-separator -bg-gray'>
    <div class='container _container-fix'>
      <NewsPreviews />
    </div>
  </section>
</template>


<script>
  import MetaInfo from '@/Utils/MetaInfo.js'

  import NewsPreviews from '@/components/NewsPreviews/NewsPreviews.vue'
  export default {
    components: {
      NewsPreviews,
    },
    metaInfo () {
      return MetaInfo(
        this.$route.path,
        'News',
      )
    },
  };
</script>