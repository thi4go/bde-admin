// Configuration for your app

module.exports = function (ctx) {
  return {
    plugins: [
      'api',
      'vuelidate'
    ],
    css: [
      'app.styl'
    ],
    animations: [
      'bounceInLeft',
      'bounceOutRight'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      // 'ionicons',
      // 'mdi',
      'fontawesome'
    ],
    supportIE: true,
    vendor: {
      add: [],
      remove: []
    },
    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      // useNotifier: false,
      extendWebpack (cfg) {
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QLayoutFooter',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QBtnDropdown',
        'QBtnGroup',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSeparator',
        'QItemSide',
        'QInput',
        'QSelect',
        'QRadio',
        'QCarousel',
        'QCarouselSlide',
        'QTimeline',
        'QTimelineEntry',
        'QCard',
        'QCardMain',
        'QCardTitle',
        'QCardMedia',
        'QCardSeparator',
        'QCardActions',
        'QItemTile',
        'QCollapsible',
        'QSearch',
        'QTabs',
        'QTab',
        'QTabPane',
        'QTable',
        'QTd',
        'QTr',
        'QTh',
        'QStepper',
        'QStep',
        'QStepperNavigation',
        'QTableColumns',
        'QRouteTab',
        'QToggle',
        'QCheckbox',
        'QChip',
        'QModal',
        'QPagination',
        'QField',
        'QInnerLoading',
        'QSpinnerGears'
      ],
      directives: [
        'Ripple',
        'GoBack'
      ],
      plugins: [
        'Notify',
        'Dialog'
      ]
    },
    // animations: 'all' --- includes all animations
    animations: 'all',
    pwa: {
      cacheExt: 'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: 'dark',
        icons: [
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/ms-icon-144x144.png',
            'sizes': '144x144',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      extendWebpack (cfg) {
        // do something with cfg
      },
      packager: {
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      }
    },

    // leave this here for Quasar CLI
    starterKit: '1.0.0-beta.4'
  }
}
