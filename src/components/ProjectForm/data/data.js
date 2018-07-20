ProjectForm: {
  base: {
    title: 'Media & PR Inquiries',
    textButton: 'Send',
    modClassContainer: '-bg-white',
    modClassButton: '-fill-on-white-bg',
    fields: [
      {
        label: 'First Name *',
        fieldType: '-input',
        type: 'text'
      },
      {
        label: 'Business Email Address *',
        fieldType: '-input',
        type: 'email'
      },
      {
        label: 'Message *',
        fieldType: '-textarea'
      },
    ]
  },
  applyResume: {
    title: 'Apply for this position',
    modClassTitle: '-on-blue-bg',
    textButton: 'Send',
    modClassContainer: '',
    modClassButton: '-fill-on-blue-bg',
    fields: [
      {
        placeholder: 'Full Name *',
        fieldType: '-input',
        modClassField: '-on-blue-bg -small',
        type: 'text'
      },
      {
        placeholder: 'Email Address *',
        fieldType: '-input',
        modClassField: '-on-blue-bg -small',
        type: 'email',
        uploadFile: {
          title: 'Add resume',
          modClass: '-white',
          uploadClass: '-upload-sibling'
        }
      },
    ]
  }
}
