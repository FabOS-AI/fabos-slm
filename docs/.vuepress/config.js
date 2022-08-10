module.exports = {
    title: 'ServiceLifecycleManagement',
    description: 'Service Lifecycle Management',
    base: `${process.env.VERSION_PATH || '/'}`,
    themeConfig: {
          repo: 'FabOS-AI/fabos-slm',
          logo: '/img/logo.svg',
          editLinks: false,
          docsDir: '',
          editLinkText: '',
          lastUpdated: false,
          nav: [
              { text: 'Home', link: '/' },
          ],

          sidebar: {
              '/docs/': [
                {
                  title: 'Getting Started',
                  collapsable: false,
                  children: [
                    'getting-started/',
                    'getting-started/overview',
                    'getting-started/architecture',
                    'getting-started/installation',
                    {
                      title: "First Steps",
                      path: "/docs/getting-started/first-steps/",
                      collapsable: true,
                      children: [
                        '/docs/getting-started/first-steps/step1-add-resource',
                        '/docs/getting-started/first-steps/step2-install-deployment-capability',
                        '/docs/getting-started/first-steps/step3-create-service-vendor',
                        '/docs/getting-started/first-steps/step4-create-service-offering',
                        '/docs/getting-started/first-steps/step5-deploy-service',
                      ]
                    },
                    'getting-started/import',
                  ],
                },
                {
                  title: 'Usage',
                  collapsable: false,
                  children: [
                    'usage/',
                  ],
                },
                {
                  title: 'Development',
                  collapsable: false,
                  children: [
                    'development/developers',
                  ],
                },
              ]
          },
      },
      plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@dovyp/vuepress-plugin-clipboard-copy',
        '@vuepress/medium-zoom'
      ],
}