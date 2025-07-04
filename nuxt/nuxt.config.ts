export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: ['./components/public/', './components/admin/'],
  css: ['/static/css/fonts.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/bootstrap.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@nuxtjs/eslint-module',
    'yandex-metrika-module-nuxt3',
    'nuxt-quasar-ui',
    '@pinia/nuxt'
  ],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        { type: 'text/javascript', children: '(function(window,document,n,project_ids){window.GudokData=n;if(typeof project_ids !== "object"){project_ids = [project_ids]};window[n] = {};window[n]["projects"]=project_ids;config_load(project_ids.join(\',\'));function config_load(cId){var a=document.getElementsByTagName("script")[0],s=document.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)},cMrs=\'\';s.async=true;if(document.location.search&&document.location.search.indexOf(\'?gudok_check=\')===0)cMrs+=document.location.search.replace(\'?\',\'&\');s.src="//mod.gudok.tel/script.js?sid="+cId+cMrs;if(window.opera == "[object Opera]"){document.addEventListener("DOMContentLoaded", i, false)}else{i()}}})(window, document, "gd", "xoakjoud45");' },
        {
          type: 'text/javascript',
          tagPosition: 'head',
          innerHTML: `
            const addParser = () => {
              var projectId = 122354
              var script = document.createElement('script')
              script.type = 'text/javascript'
              script.src = 'https://lpt-crm.online/lpt_widget/out/parser.min.js'
              window.lptWg = window.lptWg || {}
              window.lptWg.projectId = projectId
              window.lptWg.parser = true
              document.head.appendChild(script)
            }
            addParser() 
          `
        },
        {
          type: 'text/javascript',
          tagPosition: 'head',
          innerHTML: `
            const addKick = () => {
              var projectId = 122354
              var script = document.createElement('script')
              script.type = 'text/javascript'
              script.src = 'https://lpt-crm.online/lpt_widget/kick-widget.js'
              window.lptWg = window.lptWg || {}
              window.lptWg.projectId = projectId
              window.lptWg.parser = true
              document.head.appendChild(script)
            }
            addKick()
          `
        }
      ]
    }
  },
  yandexMetrika: {
    id: '46403730',
    webvisor: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    consoleLog: false
  },
  plugins: ['./components/public/plugins/init',
    './components/public/plugins/recaptcha.client.ts'
  ],
  runtimeConfig: {
    public: {
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY
    },
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY
  },
  quasar: {
    sassVariables: '~/assets/scss/quasar.variables.scss',
    plugins: ['Notify'],
    extras: {
      font: 'roboto-font',
      animations: 'all',
      fontIcons: ['mdi-v7']
    },
    config: {
      notify: {
        position: 'top',
        actions: [{ icon: 'close', color: 'white' }]
      }
    }
  },
  hooks: {
    'vite:extendConfig'(viteInlineConfig, _env) {
      viteInlineConfig.server = {
        ...viteInlineConfig.server,
        hmr: {
          protocol: 'ws',
          port: 24678
        }
      }
    }
  },
  eslint: {
    lintOnStart: false
  }
})
