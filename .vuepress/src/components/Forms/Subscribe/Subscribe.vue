<template>
  <div class='articles-subscribe' :class='[this.variant, this.status]'>
    <h2 class="title">{{$localeConfig.data['Subscribe.title']}}</h2>
    <div class='form'>
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
                  :placeholder='$localeConfig.data["Subscribe.input.email.placeholder"]'
                  required=''
              >
            </label>
            <button class='send -inline' type='submit'>
              <span class='text'>{{ $localeConfig.data['Subscribe.action.submit'] }}</span>
            </button>
            <div class='button -only-mobile'>
              <button class='j-button -w100 -h-big -fill-on-white-bg' type='submit' >
                <span class='text'>{{ $localeConfig.data['Subscribe.action.submit'] }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class='overlay'>
      <div class='loader'>
        <div class='j-loader -white'>
          <div class='dot -first' />
          <div class='dot -second' />
          <div class='dot -third' />
        </div>
      </div>
      <div class='success'>{{$localeConfig.data['Subscribe.success']}}</div>
      <div class='error'>
        <div class='msg'>{{$localeConfig.data['Subscribe.error.general']}}</div>
        <button class='j-button -border-white-bg -w-limit-158' @click='onClickRetry'>{{$localeConfig.data['Subscribe.action.retry']}}</button>
      </div>
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
  props: {
    variant: String,
  },
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
    onClickRetry() {
      this.status = '-initial'
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
  @import './subscribe';
</style>
