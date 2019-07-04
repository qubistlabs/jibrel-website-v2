<template>
  <div class='project-form -w-full' :class='this.status'>
    <div class='container -no-offset'>
      <form class='form -inline _relative' v-on:submit.prevent='ajaxSend'>
        <label class='item -button-sibling'>
          <input
            type='email'
            ref='email'
            name='email'
            autocomplete='email'
            v-model='email'
            class='field -button-sibling -input -fill'
            :placeholder='$themeLocaleConfig.data.Article.EnterYourEmailAddress'
            required=''
          >
        </label>
        <button class='send -inline' type='submit'>
          <span class='text'>{{ $themeLocaleConfig.data.Article.Subscribe }}</span>
        </button>
        <div class='button -only-mobile'>
          <button class='j-button -w100 -h-big -fill-on-white-bg' type='submit' >
          <span class='text'>{{ $themeLocaleConfig.data.Article.Subscribe }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import EventBus from '@/Utils/EventBus.js';
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
import axios from 'axios'

const STATUSES = {
  INITIAL: '-initial',
  INITIAL_SENDING: '-initial-sending',
  SUCCESS: '-success',
  ERROR: '-error',
  ERROR_RETRY_SENDING: '-error-retry-sending',
}

export default {
  name: 'Subscribe',
  components: {
    axios,
    SpriteIcon,
  },
  data() {
    return {
      email: null,
      status: STATUSES.INITIAL,
    }
  },
  methods: {
    ajaxSend() {
      console.log('this.status', this.status);
      
      if (
        this.status !== STATUSES.INITIAL
        && this.status !== STATUSES.ERROR
      ) {
        return
      }

      const data = {
        contact: {
          Email: this.email,
          // "Blog" list
          _autopilot_list: 'contactlist_a0f2dbb0-3981-43cb-b250-f9622c3521a0'
        }
      }

      const valid = this.$refs.email.checkValidity()

      if (!valid) {
        return
      }

      if (STATUSES.INITIAL) {
        this.status = STATUSES.INITIAL_SENDING
        EventBus.$emit('subscribeForm', this.status)
      } else {
        this.status = STATUSES.ERROR_RETRY_SENDING
        EventBus.$emit('subscribeForm', this.status)
      }

      axios.post('/api/subscribe', data)
        .then(() => {
          this.status = STATUSES.SUCCESS
          this.email = null
          this.sendGTMEvent()
          EventBus.$emit('subscribeForm', this.status)
        })
        .catch(response => {
          this.status = STATUSES.ERROR
          EventBus.$emit('subscribeForm', this.status)
          console.error(response.statusText)
        })
    },
    sendGTMEvent() {
      window.dataLayer.push({
        'event': 'AutoEvent',
        'eventCategory': 'Requests',
        'eventAction': 'Newsletter_sign_up',
      }) 
    },
  },
  created() {
    EventBus.$on('retrySending', data => {            
      this.status = data
    })
  },
  beforeDestroy() {
    EventBus.$off('retrySending')
  },
}
</script>

<style lang='scss'>
  @import '../forms';
</style>
