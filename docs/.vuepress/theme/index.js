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
          full: '1.10.0',
          api: 'v1.10.x'
        }
      },
      keycloak: {
        version: {
          full: '12.0.4',
          api: '12.0'
        }
      },
      vault: {
        version: {
          full: '1.8.1',
          api: 'v1.8.x'
        }
      } 
    }
  }
]],
}