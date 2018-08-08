FooterMenu: [
  {
    title: fullData => fullData.i18n_EnUS_ProjectMenu.Company,
    aosAnimation: ' data-aos=\'fade-down\' data-aos-duration=\'300\' data-aos-delay="150"',
    links: [
      {
        link: 'about.html',
        text: fullData => fullData.i18n_EnUS_ProjectMenu.AboutJibrel,
      },
      {
        link: 'news.html',
        text: fullData => fullData.i18n_EnUS_ProjectMenu.PressMedia,
      },
      {
        link: 'careers.html',
        text: fullData => fullData.i18n_EnUS_ProjectMenu.Careers,
      },
    ]
  },
  {
    title: fullData => fullData.i18n_EnUS_ProjectMenu.Products,
    aosAnimation: ' data-aos=\'fade-down\' data-aos-duration=\'600\' data-aos-delay="150"',
    links: [
      {
        link: 'enterprise.html',
        text: fullData => fullData.i18n_EnUS_ProjectMenu.Enterprise,
      },
      {
        link: 'https://jwallet.network',
        text: fullData => fullData.i18n_EnUS_ProjectMenu.Jwallet,
        modClass: '-small-offset-left',
        externalLink: 'true'
      },
      {
        link: 'https://jcash.network',
        text: fullData => fullData.i18n_EnUS_ProjectMenu.Jcash,
        modClass: '-small-offset-left',
        externalLink: 'true'
      },
    ]
  },
  {
    title: fullData => fullData.i18n_EnUS_ProjectMenu.Contact,
    aosAnimation: ' data-aos=\'fade-down\' data-aos-duration=\'900\' data-aos-delay="150"',
    links: [
      {
        modal: '#send-message',
        text: fullData => fullData.i18n_EnUS_ProjectMenu.GetInTouch,
      },
    ]
  },
]
