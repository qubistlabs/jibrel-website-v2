// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../assets/js/plugins/polyfillForEach'

const forms = document.querySelectorAll('.form')

const validation = {
  init(form) {
    this.valid = true
    this.form = form
    const fieldsRequired = this.form.querySelectorAll('[required]')
    const dataAction = this.form.getAttribute('data-action')

    fieldsRequired.forEach((field) => {
      this.test(field)
    })

    if (dataAction !== 'external-form' && this.valid) {
      this.ajaxSend()
    }

    if (dataAction === 'external-form' && this.valid) {
      this.openExternalForm()
    }

  },
  fieldSuccess(field) {
    field.classList.remove('-error')
    this.valid = true
  },
  fieldError(field) {
    field.classList.add('-error')
    this.valid = false
  },
  test(field) {
    const typeField = field.getAttribute('type')
    switch (typeField) {
      case 'email':
        this.testEmail(field)
        break
      case 'checkbox':
        this.testCheckbox(field)
        break
      default:
        this.testEmpty(field)
    }
  },
  testEmpty(field) {
    if (field.value === '') {
      this.fieldError(field)
    } else {
      this.fieldSuccess(field)
    }
  },
  testEmail(field) {
    // eslint-disable-next-line no-useless-escape
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
    if (!filter.test(field.value)) {
      this.fieldError(field)
    } else {
      this.fieldSuccess(field)
    }
  },
  testCheckbox(field) {
    if (!field.is(':checked')) {
      this.fieldError(field)
    } else {
      this.fieldSuccess(field)
    }
  },
  openExternalForm() {
    const action = this.form.getAttribute('action')
    const val = this.form.querySelector('.field').value
    const url = `${action}?email=${val}`
    window.open(url)
    const event = this.form.getAttribute('data-event')
    // eslint-disable-next-line fp/no-mutation
    this.form.querySelector('.field').value = ''
    setTimeout(() => {
      this.form.querySelector('.field').classList.remove('-error')
    }, 10)
    this.eventGTM(event)
  },
  /* eslint-disable prefer-destructuring, no-undef,
  more/no-void-map, unicorn/no-fn-reference-in-iterator, func-names,
  prefer-arrow-callback, space-before-function-paren, no-unused-vars,
  space-before-blocks, fp/no-mutation, dot-notation, object-shorthand, key-spacing,  no-console */
  ajaxSend() {
    const form = this.form
    const action = this.form.getAttribute('action')
    const method = this.form.getAttribute('method')
    const event = this.form.getAttribute('data-event')
    const dataForm = $(this.form).serializeArray()
    const dataJson = {}

    $.map(dataForm, function(n, i){
      dataJson[n['name']] = n['value']
    })

    $.ajax({
      url: action,
      method: method,
      data : dataJson,
      dataType: 'json',
      success(response) {
        if (response.status === 'success') {
          validation.messageView(form, '.-success')
          validation.eventGTM(event)
        } else if (response.status === 'error') {
          validation.messageView(form, '.-error')
        } else {
          console.warn('The response does not contain the required values')
          validation.eventGTM(event)
        }
      },
    })
  },
  messageView(form, modClass) {
    form.classList.add('-hide')
    const messages = form.parentNode.querySelector('.messages').querySelector(`.message${modClass}`)
    setTimeout(function () {
      messages.classList.add('-opening')
      messages.classList.add('-open')
    }, 300)

    setTimeout(() => {
      messages.classList.remove('-open')
      $(form).find('.field').val('')
    }, 3000)
    setTimeout(() => {
      messages.classList.remove('-opening')
    }, 3300)
    setTimeout(() => {
      form.classList.remove('-hide')
    }, 3600)
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
}

document.querySelectorAll('[required]').forEach((field) => {
  field.addEventListener('input', () => {
    validation.fieldSuccess(field)
  })
})
document.querySelectorAll('.field').forEach((field) => {
  field.addEventListener('input', () => {
    if (field.value !== '') {
      field.classList.add('-no-empty')
    } else {
      field.classList.remove('-no-empty')
    }
  })

  field.addEventListener('change', () => {
    validation.test(field)
  })
})

function formSubmit(form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    validation.init(form)
  })

  const button = form.querySelector('.js-send-form')
  if (button !== null) {
    button.addEventListener('click', (event) => {
      event.preventDefault()
      const domEvent = document.createEvent('Event')
      domEvent.initEvent('submit', false, true)
      event.target.closest('form').dispatchEvent(domEvent)
    })
  }
}

forms.forEach((form) => {
  formSubmit(form)
})
