ProjectForm: {
  baseForm: {
    support: {
      title: fullData => fullData.i18n_EnUS_FormText.baseForm.titlePupport,
      formName: 'enquiry',
      textContent: fullData => fullData.i18n_EnUS_FormText.baseForm.textContent
    },
    sendMessage: {
      title: fullData => fullData.i18n_EnUS_FormText.baseForm.titleSendMessage,
      formName: 'message',
      textContent: fullData => fullData.i18n_EnUS_FormText.baseForm.textContent
    },
    productAndSale: {
      title: fullData => fullData.i18n_EnUS_FormText.baseForm.titleProductAndSale,
      formName: 'enquiry',
      textContent: fullData => fullData.i18n_EnUS_FormText.baseForm.textContent
    },
    mediaAndPR: {
      title: fullData => fullData.i18n_EnUS_FormText.baseForm.titleMediaAndPR,
      formName: 'enquiry',
      textContent: fullData => fullData.i18n_EnUS_FormText.baseForm.textContent
    },
  },
  applyResume: {
    title: 'Apply for this position',
    modClassTitle: '-on-blue-bg',
    textButton: 'Send',
    modClassContainer: '',
    modClassButton: '-fill-on-blue-bg ',
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
