module.exports = {
    title: 'ServiceLifecycleManagement',
    description: 'Service Lifecycle Management',
    base: `/`,
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
                    'getting-started/installation',
                    'getting-started/developers',
                  ],
                },
              ]
          },
      },
      plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@dovyp/vuepress-plugin-clipboard-copy',
      ],
}