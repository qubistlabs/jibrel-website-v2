PopUp: {
  MainMenu: {
    project: [
      {
        name: 'jwallet',
        descr: 'User-friendly and secure wallet to manage digital assets',
        link: 'jwallet.html',
        text: 'More info'
      },
      {
        name: 'Jcash',
        descr: 'Stable currencies on the Ethereum blockchain',
        text: 'Coming soon'
      },
      {
        name: 'Jnode',
        descr: 'Enterprise-grade, easily set-up Ethereum access',
        text: 'Coming soon'
      },
      {
        name: 'Jsearch',
        descr: 'Block Explorer with financial audit and reporting capabilities',
        link: 'jsearch.html',
        text: 'More info'
      },
      {
        name: 'Jclear',
        descr: 'Fully compliant KYC / AML solution for digital assets',
        link: 'jclear.html',
        text: 'More info'
      },
      {
        name: 'Jcore',
        descr: 'Blockchain platform developed specifically for Financial Services',
        link: 'jcore.html',
        text: 'More info'
      },
    ],
    otherSection: [
      {
        name: fullData => fullData.i18n_EnUS_ProjectMenu.Products,
        pages: [
          {
            link: 'enterprise.html',
            name: fullData => fullData.i18n_EnUS_ProjectMenu.Enterprise,
          },
          {
            link: 'https://jwallet.network',
            name: fullData => fullData.i18n_EnUS_ProjectMenu.Jwallet,
            externalLink: 'true'
          },
          {
            link: 'https://jcash.network',
            name: fullData => fullData.i18n_EnUS_ProjectMenu.Jcash,
            externalLink: 'true'
          },
        ]
      },
      {
        name: fullData => fullData.i18n_EnUS_ProjectMenu.Company,
        pages: [
          {
            link: 'about.html',
            name: fullData => fullData.i18n_EnUS_ProjectMenu.AboutUs,
          },
          {
            link: 'news.html',
            name: fullData => fullData.i18n_EnUS_ProjectMenu.PressMedia,
          },
          {
            link: 'careers.html',
            name: fullData => fullData.i18n_EnUS_ProjectMenu.Careers,
          },
        ]
      },
      {
        name: fullData => fullData.i18n_EnUS_ProjectMenu.Contact,
        pages: [
          {
            modal: '#send-message',
            name: fullData => fullData.i18n_EnUS_ProjectMenu.ContactUs,
          },
          {
            link: 'https://www.facebook.com/jibrelnetwork/',
            name: fullData => fullData.i18n_EnUS_ProjectMenu.Facebook,
            externalLink: 'true'
          },
          {
            link: 'https://twitter.com/JibrelNetwork',
            name: fullData => fullData.i18n_EnUS_ProjectMenu.Twitter,
            externalLink: 'true'
          },
          {
            link: 'https://www.linkedin.com/company/jibrel-network/',
            name: fullData => fullData.i18n_EnUS_ProjectMenu.Linkedin,
            externalLink: 'true'
          },
          {
            link: 'https://medium.com/@jibrelnetwork',
            name: fullData => fullData.i18n_EnUS_ProjectMenu.Medium,
            externalLink: 'true'
          },
        ]
      }
    ]
  },
}
