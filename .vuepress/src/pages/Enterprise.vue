<template>
  <div>
    <section class='section-content -full-screen -center-child-box -bg-black-gradient'>
      <SectionName
        :title='$themeLocaleConfig.data.SectionName.enterpriseSolution'
        positionContainer='bottom-70'
        positionTitle='bottom'
        color='white'
        arrow='down'
      />
      <div class='container -center-box _container-fix'>
        <div class='preview-info -mobile-offset'>
          <div class='text -up-visual-center'>
            <h2 class='title -text-center -white ' data-aos='fade-up' data-aos-duration='600' data-aos-delay='150'>{{$localeConfig.data.ScreenPreview.enterprisePage.title}}</h2>
            <div class='descr -medium-size -white -text-center -box-center' data-aos='fade-up' data-aos-duration='900' data-aos-delay='150'>
              {{$localeConfig.data.ScreenPreview.enterprisePage.description}}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -offset-top -offset-bottom'>
      <div class='container _container-fix'>
        <h2 class='title -text-center -box-center' data-aos="fade-in" data-aos-duration="900" data-aos-delay="150">
          {{$localeConfig.data.JibrelIntegratable.title}}
        </h2>
        <div class='card-tile -offset-top -inner-border-vertical -inner-border-gray'>
          <div class='item -three-col' data-aos="fade-down" data-aos-duration="300" data-aos-delay="150"> 
            <div class='box -color'>
              <div class='img -base-icon'>
                <svg class='icon -stroke -blue' width='57' height='57'><use xlink:href='#i-bank'></use></svg>
              </div>
              <h2 class='title '>{{$localeConfig.data.JibrelIntegratable.card_1.title}}</h2>
              <p class='descr '>{{$localeConfig.data.JibrelIntegratable.card_1.description}}</p>
            </div>
          </div>
          <div class='item -three-col' data-aos="fade-down" data-aos-duration="600" data-aos-delay="150"> 
            <div class='box -color'>
              <div class='img -base-icon'>
                <svg class='icon -stroke -blue' width='60' height='60'><use xlink:href='#i-store'></use></svg>
              </div>
              <h2 class='title '>{{$localeConfig.data.JibrelIntegratable.card_2.title}}</h2>
              <p class='descr '>{{$localeConfig.data.JibrelIntegratable.card_2.description}}</p>
            </div>
          </div>
          <div class='item -three-col' data-aos="fade-down" data-aos-duration="900" data-aos-delay="150"> 
            <div class='box -color'>
              <div class='img -base-icon'>
                <svg class='icon -stroke -blue' width='60' height='60'><use xlink:href='#i-goverment'></use></svg>
              </div>
              <h2 class='title '>{{$localeConfig.data.JibrelIntegratable.card_3.title}}</h2>
              <p class='descr '>{{$localeConfig.data.JibrelIntegratable.card_3.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -mobile-bg-gray'>
      <div class='container _container-fix -bg-gray -offset-top -offset-bottom'>
        <h2 class='title -text-center -box-center' data-aos="fade-in" data-aos-duration="900" data-aos-delay="150">
          {{$localeConfig.data.EnterpriseSolution.title}}
        </h2>
        <h2 class='descr -text-center -box-center' data-aos="fade-in" data-aos-duration="900" data-aos-delay="150">
          {{$localeConfig.data.EnterpriseSolution.description}}
        </h2>
        <div class='card-tile'>
          <div class='item -three-col -base-offset' data-aos="fade-down" data-aos-duration="300" data-aos-delay="150"> 
            <div class='box -color'>
              <div class='img '>
                <img src='@/assets/img/general/icon/stopwatch.svg' class='icon' width='48' height='48' alt='icon'>
              </div>
              <h2 class='title '>{{$localeConfig.data.EnterpriseSolution.card_1.title}}</h2>
              <p class='descr '>{{$localeConfig.data.EnterpriseSolution.card_1.description}}</p>
            </div>
          </div>
          <div class='item -three-col -base-offset' data-aos="fade-down" data-aos-duration="600" data-aos-delay="150"> 
            <div class='box -color'>
              <div class='img '>
                <img src='@/assets/img/general/icon/login-lock.svg' class='icon' width='48' height='48' alt='icon'>
              </div>
              <h2 class='title '>{{$localeConfig.data.EnterpriseSolution.card_2.title}}</h2>
              <p class='descr '>{{$localeConfig.data.EnterpriseSolution.card_2.description}}</p>
            </div>
          </div>
          <div class='item -three-col -base-offset' data-aos="fade-down" data-aos-duration="900" data-aos-delay="150"> 
            <div class='box -color'>
              <div class='img '>
                <img src='@/assets/img/general/icon/view.svg' class='icon' width='48' height='48' alt='icon'>
              </div>
              <h2 class='title '>{{$localeConfig.data.EnterpriseSolution.card_3.title}}</h2>
              <p class='descr '>{{$localeConfig.data.EnterpriseSolution.card_3.description}}</p>
            </div>
          </div>
          <div class='item -three-col -base-offset' data-aos="fade-down" data-aos-duration="300" data-aos-delay="250"> 
            <div class='box -color'>
              <div class='img '>
                <img src='@/assets/img/general/icon/percent-increase.svg' class='icon' width='48' height='48' alt='icon'>
              </div>
              <h2 class='title '>{{$localeConfig.data.EnterpriseSolution.card_4.title}}</h2>
              <p class='descr '>{{$localeConfig.data.EnterpriseSolution.card_4.description}}</p>
            </div>
          </div>
          <div class='item -three-col -base-offset' data-aos="fade-down" data-aos-duration="600" data-aos-delay="250"> 
            <div class='box -color'>
              <div class='img '>
                <img src='@/assets/img/general/icon/location-pin.svg' class='icon' width='48' height='48' alt='icon'>
              </div>
              <h2 class='title '>{{$localeConfig.data.EnterpriseSolution.card_5.title}}</h2>
              <p class='descr '>{{$localeConfig.data.EnterpriseSolution.card_5.description}}</p>
            </div>
          </div>
          <div class='item -three-col -base-offset' data-aos="fade-down" data-aos-duration="900" data-aos-delay="250"> 
            <div class='box -color'>
              <div class='img '>
                <img src='@/assets/img/general/icon/compatible.svg' class='icon' width='48' height='48' alt='icon'>
              </div>
              <h2 class='title '>{{$localeConfig.data.EnterpriseSolution.card_6.title}}</h2>
              <p class='descr '>{{$localeConfig.data.EnterpriseSolution.card_6.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -offset-top -offset-bottom'>
      <div class='container _container-fix'>
        <p class='title -text-center -box-center' data-aos="fade-in" data-aos-duration="600" data-aos-delay="150">
          {{$localeConfig.data.PartnersData.title}}
        </p>
        <PartnersCard />
      </div>
    </section>
    <section class='section-content -center-child-box -offset-bottom -mobile-bg-gray'>
      <div class='container -center-box _container-fix -bg-gray'>
        <div class='preview-info -row -inner -mobile-offset-bottom-collapse -closed-perimeter'>
          <div class='text -w50'>
            <h2 class='title  ' data-aos='fade-right' data-aos-duration='300' data-aos-delay='150'>{{$localeConfig.data.ProductInfo.enterprise_1.title}}</h2>
            <div class='descr -small-text -color' data-aos='fade-right' data-aos-duration='600' data-aos-delay='150' v-html='$localeConfig.data.ProductInfo.enterprise_1.description'></div>
          </div>
          <div class='picture'>
            <img src='@/assets/img/general/chess/enterprise-1.svg'   class='img -enterprise-right _mobile-hide' data-aos='fade-up-left' data-aos-duration='600' data-aos-delay='150' alt='/'>
            <img src='@/assets/img/general/chess/promo-1.svg'  width='60' height='60' class='img _mobile-visible' data-aos='fade-up-left' data-aos-duration='600' data-aos-delay='150' alt='/'>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -center-child-box -offset-bottom -mobile-bg-gray'>
      <div class='container -center-box _container-fix -bg-gray'>
        <div class='preview-info -row -inner -reverse -mobile-offset-top-collapse -closed-perimeter'>
          <div class='text -w50'>
            <h2 class='title  ' data-aos='fade-left' data-aos-duration='300' data-aos-delay='150'>
              {{$localeConfig.data.ProductInfo.enterprise_2.title}}
            </h2>
            <div class='descr -small-text -color' data-aos='fade-left' data-aos-duration='600' data-aos-delay='150' v-html='$localeConfig.data.ProductInfo.enterprise_2.description'></div>
          </div>
          <div class='picture'>
            <img src='@/assets/img/general/chess/enterprise-2.svg'   class='img -enterprise-left _mobile-hide' data-aos='fade-up-right' data-aos-duration='600' data-aos-delay='150' alt='/'>
            <img src='@/assets/img/general/chess/promo-2.svg'  width='60' height='60' class='img _mobile-visible' data-aos='fade-up-right' data-aos-duration='600' data-aos-delay='150' alt='/'>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -center-child-box -offset-bottom -mobile-bg-gray'>
      <div class='container -center-box _container-fix -bg-gray'>
        <div class='preview-info -row -inner -mobile-offset-top-collapse -closed-perimeter'>
          <div class='text -w50'>
            <h2 class='title  ' data-aos='fade-right' data-aos-duration='300' data-aos-delay='150'>{{$localeConfig.data.ProductInfo.enterprise_3.title}}</h2>
            <div class='descr -small-text -color' data-aos='fade-right' data-aos-duration='600' data-aos-delay='150' v-html='$localeConfig.data.ProductInfo.enterprise_3.description'></div>
          </div>
          <div class='picture'>
            <img src='@/assets/img/general/chess/enterprise-3.svg'   class='img -enterprise-right _mobile-hide' data-aos='fade-up-left' data-aos-duration='600' data-aos-delay='150' alt='/'>
            <img src='@/assets/img/general/chess/promo-3.svg'  width='60' height='60' class='img _mobile-visible' data-aos='fade-up-left' data-aos-duration='600' data-aos-delay='150' alt='/'>
          </div>
        </div>
      </div>
    </section>
    <section class='section-content -offset-top -offset-bottom -bg-dark'>
      <div class='container -center-box _container-fix' data-aos='fade-in' data-aos-duration='900' data-aos-delay='150'>
        <ProjectForm 
          eventType='product-and-sale-enterprise'
          formName='enquiry'
          :title='$themeLocaleConfig.data.FormText.baseForm.titleProductAndSale'
        />
      </div>
    </section>
  </div> 
</template>

<script>
import SectionName from '@/components/base/SectionName/SectionName.vue'
import PartnersCard from '@/components/PartnersCard/PartnersCard.vue'
import ProjectForm from '@/components/ProjectForm/ProjectForm.vue'
export default {
  components: {
    SectionName,
    PartnersCard,
    ProjectForm,
  }
}
</script>
