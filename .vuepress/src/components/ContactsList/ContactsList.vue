<template>
  <section class='section-content' :class='isWhite && "-bg-dark"'>
    <div class='container _container-fix' :class='isWhite && " -offset-top -offset-bottom"'>
      <div class='card-tile -inner-border-separator -inner-border-white -inner-border-vertical'>
        <div class='item -four-col' data-aos="fade-down" data-aos-duration="300" data-aos-delay="150"> 
          <div class='box -padding-small' :class='isWhite ? "-white" : "-color"'>
            <div class='img '>
              <img src='@/assets/img/general/icon/zug-w.svg' class='icon' width='60' height='60' alt='icon' v-if='isWhite'>
              <img src='@/assets/img/general/icon/zug.svg' class='icon' width='60' height='60' alt='icon' v-if='!isWhite'>
            </div>
            <h2 class='title'>{{this.$localeConfig.data.ProjectContact.Zug.city}}</h2>
            <p class='descr' v-html='this.$localeConfig.data.ProjectContact.Zug.address'></p>
          </div>
        </div>
        <div class='item -four-col' data-aos="fade-down" data-aos-duration="600" data-aos-delay="150"> 
          <div class='box -padding-small' :class='isWhite ? "-white" : "-color"'>
            <div class='img'>
              <img src='@/assets/img/general/icon/new-york-w.svg' class='icon' width='60' height='60' alt='icon' v-if='isWhite'>
              <img src='@/assets/img/general/icon/new-york.svg' class='icon' width='60' height='60' alt='icon' v-if='!isWhite'>
            </div>
            <h2 class='title'>{{this.$localeConfig.data.ProjectContact.NewYork.city}}</h2>
            <p class='descr' v-html='this.$localeConfig.data.ProjectContact.NewYork.address'></p>
          </div>
        </div>
        <div class='item -four-col' data-aos="fade-down" data-aos-duration="900" data-aos-delay="150"> 
          <div class='box -padding-small' :class='isWhite ? "-white" : "-color"'>
            <div class='img'>
              <img src='@/assets/img/general/icon/peters-w.svg' class='icon' width='60' height='60' alt='icon' v-if='isWhite'>
              <img src='@/assets/img/general/icon/peters.svg' class='icon' width='60' height='60' alt='icon' v-if='!isWhite'>
            </div>
            <h2 class='title'>{{this.$localeConfig.data.ProjectContact.StPetersburg.city}}</h2>
            <p class='descr' v-html='this.$localeConfig.data.ProjectContact.StPetersburg.address'></p>
          </div>
        </div>
        <div class='item -four-col' data-aos="fade-down" data-aos-duration="1200" data-aos-delay="150"> 
          <div class='box -padding-small' :class='isWhite ? "-white" : "-color"'>
            <div class='img'>
              <img src='@/assets/img/general/icon/dubai-w.svg' class='icon' width='60' height='60' alt='icon' v-if='isWhite'>
              <img src='@/assets/img/general/icon/dubai.svg' class='icon' width='60' height='60' alt='icon' v-if='!isWhite'>
            </div>
            <h2 class='title'>{{this.$localeConfig.data.ProjectContact.Dubai.city}}</h2>
            <p class='descr' v-html='this.$localeConfig.data.ProjectContact.Dubai.address'></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactsList',
  props: {
    isWhite: false
  },
  computed: {
    contacts() {
      return [
        {
          img: '@/assets/img/general/icon/zug-w.svg',
          city: this.$localeConfig.data.ProjectContact.Zug.city,
          address: this.$localeConfig.data.ProjectContact.Zug.address
        },
        {
          img: '@/assets/img/general/icon/new-york-w.svg',
          city: this.$localeConfig.data.ProjectContact.NewYork.city,
          address: this.$localeConfig.data.ProjectContact.NewYork.address
        },
        {
          img: '@/assets/img/general/icon/peters-w.svg',
          city: this.$localeConfig.data.ProjectContact.StPetersburg.city,
          address: this.$localeConfig.data.ProjectContact.StPetersburg.address
        },
        {
          img: '@/assets/img/general/icon/dubai-w.svg',
          city: this.$localeConfig.data.ProjectContact.Dubai.city,
          address: this.$localeConfig.data.ProjectContact.Dubai.address
        },
      ]
    }
  },
}
</script>