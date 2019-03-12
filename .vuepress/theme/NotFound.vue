<template>
  <div>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=[__GTM_ID__]"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <section class='section-content -full-screen -center-child-box -bg-blue-gradient'>
      <div class='container -static -center-box _container-fix'>
        <div class="project-error">
          <div class="info">
            <img src="@/assets/img/general/icon/cloud-question.svg" alt="" class="img">
            <h2 class="title">404. Page Not Found.</h2>
            <p class="descr -e404">The page you&#x27;re looking for can&#x27;t be found. Check the URL and try again.</p>
          </div>
          <div class="back">
            <router-link :to='this.$localeConfig.path' class='link'>Back to Home</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template> 
<script>
export default {
  
};
</script>
