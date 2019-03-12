<template>
  <div class='section-content -bg-gray'>
    <div class='container _container-fix'>
      <div class='page-header'>
        <router-link :to='`${$localeConfig.path + typePage}/`' class='back' v-if='typePage === "news" | typePage === "careers"'>
          <svg class="icon -color" width="11" height="11"><use xlink:href="#arr-l"></use></svg>
          <span class='text'>{{title}}</span>
        </router-link>
        <div class='soc _mobile-hide' v-if='typePage === "news" | typePage === "careers"'>
          <div class="ya-share2" data-services="facebook,twitter,linkedin"></div>
        </div>
        <div class='tab-links' v-if='typePage === "policyPage"'>
          <router-link :to='"#"' class='item -color -active'>Privacy Policy</router-link>
          <router-link :to='"#"' class='item -color'>Cookies Policy</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    typePage: 'careers' | 'policyPage' | 'news',
    title: String,
  },
}
</script>

<style lang="scss">
  @import './pageHeader';
</style>

