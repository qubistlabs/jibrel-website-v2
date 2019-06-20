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
            placeholder='Enter your email Address'
            required=''
          >
        </label>
        <button class='send -inline' type='submit'>
          <span class='text'>{{$themeLocaleConfig.data.FormText.emailOnly.button}}</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
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
      if (
        this.status !== STATUSES.INITIAL
        && this.status !== STATUSES.ERROR
      ) {
        return
      }

      console.log('hey')

      const data = {
        contact: {
          Email: this.email,
        }
      }

      const valid = this.$refs.email.checkValidity()

      if (!valid) {
        return
      }

      if (STATUSES.INITIAL) {
        this.status = STATUSES.INITIAL_SENDING
      } else {
        this.status = STATUSES.ERROR_RETRY_SENDING
      }

      axios.post('/api/subscribe', data)
        .then(() => {
          this.status = STATUSES.SUCCESS
          this.email = null
          this.sendGTMEvent()
        })
        .catch(response => {
          this.status = STATUSES.ERROR
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
}
</script>

<style lang='scss'>
  @import '../forms';
</style>
