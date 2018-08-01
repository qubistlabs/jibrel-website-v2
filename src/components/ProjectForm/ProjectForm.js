// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../assets/js/plugins/polyfillForEach'

const forms = document.querySelectorAll('.form')

const validation = {
  init(form) {
    this.valid = true
    this.form = form
    const fieldsRequired = this.form.querySelectorAll('[required]')

    fieldsRequired.forEach((field) => {
      this.test(field)
    })

    if (this.valid) {
      this.ajaxSend()
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
  ajaxSend() {
    // const action = this.form.getAttribute('action')
    // const method = this.form.getAttribute('method')
    // // this.form.submit()
    // //
    // fetch(action, {
    //   method: method,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: 'Hubot',
    //     login: 'hubot',
    //   }),
    // })
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
