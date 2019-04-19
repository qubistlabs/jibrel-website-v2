<template>
  <div class='project-form' v-if='isJcashOpen'>
    <div class='container -no-offset'>
      <form class='form -inline _relative'>
        <label class='item -button-sibling'>
          <input type='email' v-model='email' class='field -button-sibling -input -fill' :class='emailError && "-error"' :placeholder='$themeLocaleConfig.data.FormText.emailOnly.email' required=''>
        </label>
        <button class='send -inline' type='button' @click='openExternalForm'><span class='text'>{{$themeLocaleConfig.data.FormText.emailOnly.button}}</span></button>
      </form>
    </div>
  </div>
  <div class='project-form -w-large' v-else-if='!isJcashOpen'>
    <div class='container'>
      <h2 class='title -white'>{{title}}</h2>
      <form method='POST' class='form' :class='isHideForm && "-hide"'>
        <input type='hidden'>
        <input type='hidden' name='form-name' :value='formName'>
        <label class='item'>
          <input type='text' class='field -input -white' name='full-name' v-model='fullName' required :class='[fullNameError && "-error", fullName && "-no-empty"]'>
          <span class='label -white'>{{$themeLocaleConfig.data.FormText.baseForm.textContent.name}}</span>
        </label>
        <label class='item'>
          <input type='email' class='field -input -white' name='email' v-model='email' required :class='[emailError && "-error", email && "-no-empty"]'>
          <span class='label -white'>{{$themeLocaleConfig.data.FormText.baseForm.textContent.email}}</span>
        </label>
        <label class='item'>
          <textarea class='field -textarea -white' name='message' v-model='message' required :class='[messageError && "-error", message && "-no-empty"]'></textarea>
          <span class='label -white'>{{$themeLocaleConfig.data.FormText.baseForm.textContent.message}}</span>
        </label>
        <div class='button'>
          <button class='j-button -fill-on-gray-bg -w100' type='button' @click='ajaxSend'>
            <span class='text'>{{$themeLocaleConfig.data.FormText.baseForm.textContent.button}}</span>
          </button>
        </div>
      </form>
      <div class='messages'>
        <div class='message -success' :class='isSuccess && "-open"'>
          <SpriteIcon name='smiley-smile' class='icon'/>
          <div class='title'>{{$themeLocaleConfig.data.FormText.baseForm.textContent.successTitle}}</div>
          <div class='message'>{{$themeLocaleConfig.data.FormText.baseForm.textContent.seccessMsg}}</div>
        </div>
        <div class='message -error' :class='isError && "-open"'>
          <SpriteIcon name='smiley-frown' class='icon'/>
          <div class='title'>{{$themeLocaleConfig.data.FormText.baseForm.textContent.errorTitle}}</div>
          <div class='message'>{{$themeLocaleConfig.data.FormText.baseForm.textContent.errorMsg}}</div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
const action = 'https://jcash.network/auth/signup'
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
import axios from 'axios'
export default {
  name: 'ProjectForm',
  components: {
    axios,
    SpriteIcon,
  },
  props: {
    isJcashOpen: '',
    title: '',
  },
  data() {
    return {
      eventType: String,
      formName: String,
      email: null,
      fullName: null,
      message: null,
      emailError: false,
      fullNameError: false,
      messageError: false,
      isSuccess: false,
      isError: false,
      isHideForm: false
    }
  },
  methods: {
    openExternalForm(eventGTM) {
      if (this.testEmail(this.email)) {
        this.emailError = false
        const url = `${action}?email=${this.email}`
        window.open(url)
        this.email = ''
        this.eventGTM(eventGTM)
      } else {
        this.emailError = true
      }
    },
    testEmail(email) {      
      // eslint-disable-next-line no-useless-escape
      var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return filter.test(email);
    },
    testCheckbox(field) {
      if (!field.is(':checked')) {
        this.fieldError(field)
      } else {
        this.fieldSuccess(field)
      }
    },
    checkForm() {
      this.valid = true
      if (this.fullName) {
        this.fullNameError = false
      } else {
        this.fullNameError = true
        this.valid = false
      }
      if (this.message) {
        this.messageError = false
      } else {
        this.messageError = true
        this.valid = false
      }
      if (this.testEmail(this.email)) {
        this.emailError = false
      } else {
        this.emailError = true
        this.valid = false
      }
      return this.valid
    },
    ajaxSend() {
      const dataJson = {
        "form-name": "enquiry",
        "full-name": this.fullName,
        "email": this.email,
        "message": this.message 
      }
      
      if (!this.checkForm()) {
        return false
      }
      axios({
        method: "post",
        url: `https://app.jnode.network/feedback`,
        data: dataJson
      }).then(response => {
        if (response.status === 'success') {
          setTimeout(() => {
            this.isSuccess = true
          }, 300)
          validation.eventGTM(event)
        } else if (response.status === 'error') {
          setTimeout(() => {
            this.isError = true
          }, 300)
        } else {
          console.warn('The response does not contain the required values')
          validation.eventGTM(event)
          return
        }
        this.isHideForm = true
        setTimeout(() => {
          this.isHideForm = false
        }, 3300)
        setTimeout(() => {
          this.isSuccess = false
          this.isError = false
        }, 3600)
      });
    },
    /* eslint-enable */
    eventGTM(event) {
      function menuDataSend(category, action, label) {
        // eslint-disable-next-line fp/no-mutating-methods
        window.dataLayer.push({
          'event': 'AutoEvent',
          'eventCategory': category,
          'eventAction': action,
          'eventLabel': label,
          'eventValue': '',
        })
      }
      switch (event) {
        case 'sign-up-success':
          menuDataSend('Requests', 'Sign_up_success', 'First_screen_form')
          break
        case 'get-in-touch-popup':
          menuDataSend('Requests', 'Get_in_touch_success', 'Pop_up')
          break
        case 'product-and-sale-enterprise':
          menuDataSend('Requests', 'Get_in_touch_success', 'Enterprise_form')
          break
        default: // Empty
      }
    },
  },
  watch: {
    fullName: function () {
      this.fullNameError = false
    },
    message: function () {
      this.messageError = false
    },
    email: function () {
      this.emailError = false
    }
  }
}
</script>

<style lang='scss'>
  @import './projectForm.scss'
</style>
