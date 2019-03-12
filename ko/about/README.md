---
headerColor: white
---

<template>
  <div>
    <section class='section-content -full-screen -center-child-box -bg-blue-gradient'>
      <SectionName
        :title='$themeLocaleConfig.data.SectionName.whatWeDo'
        positionContainer='bottom-70'
        positionTitle='bottom'
        color='white'
        arrow='down'
      />
      <div class='container -center-box _container-fix'>
        <div class='preview-info'>
          <div class='text '>
            <h2 class='title -color -white -text-center ' data-aos='fade-up' data-aos-duration='600' data-aos-delay='150'>
              {{$localeConfig.data.ScreenPreview.aboutPage.title}}
            </h2>
            <div class='descr -color -white -text-center -box-center -medium-size' data-aos='fade-up' data-aos-duration='900' data-aos-delay='150'>
              {{$localeConfig.data.ScreenPreview.aboutPage.description}}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -offset-top -offset-bottom'>
      <div class='container _container-fix'>
        <div class='card-tile'>
          <div class='item -three-col' data-aos="fade-down" data-aos-duration="300" data-aos-delay="150"> 
            <div class='box -color -padding-small'>
              <h2 class='title -large-size'>{{$localeConfig.data.MissionVisionValues.card_1.title}}</h2>
              <p class='descr'>{{$localeConfig.data.MissionVisionValues.card_1.description}}</p>
            </div>
          </div>
          <div class='item -three-col' data-aos="fade-down" data-aos-duration="600" data-aos-delay="150"> 
            <div class='box -color -padding-small'>
              <h2 class='title -large-size'>{{$localeConfig.data.MissionVisionValues.card_2.title}}</h2>
              <p class='descr '>{{$localeConfig.data.MissionVisionValues.card_2.description}}</p>
            </div>
          </div>
          <div class='item -three-col' data-aos="fade-down" data-aos-duration="900" data-aos-delay="150"> 
            <div class='box -color -padding-small'>
              <h2 class='title -large-size'>{{$localeConfig.data.MissionVisionValues.card_3.title}}</h2>
              <p class='descr '>{{$localeConfig.data.MissionVisionValues.card_3.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -mobile-bg-gray -offset-bottom'>
      <div class='container -bg-gray -offset-top -offset-bottom _container-fix'>
        <h2 class='title -text-center -box-center' data-aos="fade-in" data-aos-duration="900" data-aos-delay="150">
          {{$localeConfig.data.ProvidesConsumerEnterprise.title}}
        </h2>
        <div class='card-tile -inner-border-separator -inner-border-gray -offset-top'>
          <div class='item -two-col' data-aos="fade-right" data-aos-duration="300" data-aos-delay="150"> 
            <div class='box -color -padding-small'>
              <div class='img -base-icon'>
                <img src='@/assets/img/svg/i-business-female-chat.svg' class='icon' width='56' height='57' alt='icon'>
              </div>
              <h2 class='title'>{{$localeConfig.data.ProvidesConsumerEnterprise.card_1.title}}</h2>
              <p class='descr '>{{$localeConfig.data.ProvidesConsumerEnterprise.card_1.description}}</p>
            </div>
          </div>
          <div class='item -two-col' data-aos="fade-left" data-aos-duration="600" data-aos-delay="150"> 
            <div class='box -color -padding-small'>
              <div class='img -base-icon'>
                <svg class='icon -stroke' width='56' height='57'><use xlink:href='#i-business-statistics'></use></svg>
              </div>
              <h2 class='title'>{{$localeConfig.data.ProvidesConsumerEnterprise.card_2.title}}</h2>
              <p class='descr'>{{$localeConfig.data.ProvidesConsumerEnterprise.card_1.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -offset-top -offset-bottom -bg-dark'>
      <div class='container _container-fix'>
        <h2 class='title -white -text-center -box-center' data-aos="fade-in" data-aos-duration="900" data-aos-delay="150">{{$localeConfig.data.JibrelIntegratable.title}}</h2>
        <div class='card-tile -offset-top -inner-border-vertical -inner-border-white'>
          <div class='item -three-col' data-aos="fade-down" data-aos-duration="300" data-aos-delay="150"> 
            <div class='box -white'>
              <div class='img -base-icon'>
                <svg class='icon -stroke' width='57' height='57'><use xlink:href='#i-bank'></use></svg>
              </div>
              <h2 class='title'>{{$localeConfig.data.JibrelIntegratable.card_1.title}}</h2>
              <p class='descr '>{{$localeConfig.data.JibrelIntegratable.card_1.description}}</p>
            </div>
          </div>
          <div class='item -three-col' data-aos="fade-down" data-aos-duration="600" data-aos-delay="150"> 
            <div class='box -white'>
              <div class='img -base-icon'>
                <svg class='icon -stroke' width='60' height='60'><use xlink:href='#i-store'></use></svg>
              </div>
              <h2 class='title'>{{$localeConfig.data.JibrelIntegratable.card_2.title}}</h2>
              <p class='descr '>{{$localeConfig.data.JibrelIntegratable.card_2.description}}</p>
            </div>
          </div>
          <div class='item -three-col' data-aos="fade-down" data-aos-duration="900" data-aos-delay="150"> 
            <div class='box -white'>
              <div class='img -base-icon'>
                <svg class='icon -stroke' width='60' height='60'><use xlink:href='#i-goverment'></use></svg>
              </div>
              <h2 class='title'>{{$localeConfig.data.JibrelIntegratable.card_3.title}}</h2>
              <p class='descr '>{{$localeConfig.data.JibrelIntegratable.card_3.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -offset-top -offset-bottom'>
      <div class='container _container-fix'>
        <ContactsList />
      </div>
    </section>
  </div>
</template>

<script>
import SectionName from '@/components/base/SectionName/SectionName.vue'
import PartnersCard from '@/components/PartnersCard/PartnersCard.vue'
import ContactsList from '@/components/ContactsList/ContactsList.vue'
export default {
  components: {
    SectionName,
    PartnersCard,
    ContactsList,
  }
}
</script>
