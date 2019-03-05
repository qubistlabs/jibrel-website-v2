<template>
  <div>
    <section class='section-content -full-screen -center-child-box -bg-blue-gradient'>
      <SectionName
        title='WELCOME'
        positionContainer='bottom-70'
        positionTitle='bottom'
        color='white'
        arrow='down'
      />
      <div class='container -center-box _container-fix'>
        <div class='preview-info -mobile-offset'>
          <div class='text '>
            <h2 class='title -color -white -text-center ' data-aos='fade-up' data-aos-duration='600' data-aos-delay='150'>Compliant Stable Coins</h2>
            <div class='descr -medium-size -white -color -text-center -box-center' data-aos='fade-up' data-aos-duration='900' data-aos-delay='150'>Jibrel provides currencies, equities, commodities and other financial assets as standard ERC-20 tokens on the Ethereum blockchain</div>
          </div>
          <div class='form _mobile-hide' data-aos='fade-in' data-aos-duration='1200' data-aos-delay='600'>
            <div class='project-form'>
              <div class='container -no-offset'>
                <form action='https://jcash.network/auth/signup' class='form -inline _relative' data-action='external-form' data-event='sign-up-success'>
                  <label class='item -button-sibling'>
                    <input type='email' class='field -button-sibling -input -fill' placeholder='Email Address' required=''>
                  </label>
                  <button class='send -inline js-send-form'><span class='text'>Sign Up</span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='button-bottom _mobile-visible'>
        <div class='_container-fix'>
          <a href='https://jcash.network/auth/signup' class='j-button -fill-on-blue-bg'><span class='text'>Sign Up</span></a>
        </div>
      </div>
    </section>
    <section class='section-content -offset-bottom -offset-top -mobile-bg-gray -mobile-offset-top'>
      <div class='container _container-fix'>
        <NewsPreviews isBordered='true' limit='3' />
        <div class='j-buttons -center' data-aos='fade-in' data-aos-duration='1200' data-aos-delay='150'>
          <router-link to="/news/" class='j-button -fill-on-white-bg -w-limit-360' >
            <span class='text'>Show more news</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SectionName from '@/components/base/SectionName/SectionName.vue'
import NewsPreviews from '@/components/NewsPreviews/NewsPreviews.vue'
export default {
  components: {
    SectionName,
    NewsPreviews,
  }
}
</script>
