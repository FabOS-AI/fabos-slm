module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [['vuepress-plugin-global-variables', { 
    variables: {
      awx: {
        version: {
          full: '15.0.1'
        }
      },
      consul: {
        version: {
          full: '1.13.2',
          api: 'v1.13.x'
        }
      },
      keycloak: {
        version: {
          full: '19.0.2',
          api: '18.0'
        }
      },
      vault: {
        version: {
          full: '1.11.3',
          api: 'v1.11.x'
        }
      } 
    }
  }
]],
}